(function($) {

  function apiGetPromise(url, token) {
    return $.ajax({
      url: url,
      method: 'get',
      headers: { 'Authorization': 'Bearer ' + token,
                 'Accept': 'application/vnd.unbounce.api.v0.4+json' },
      dataType: 'json'
    }).promise();
  }

  function apiGet(url, token) {
    return Rx.Observable.fromPromise(apiGetPromise(url, token));
  }

  function getDomainData(subAccount, domains) {
    if($.isArray(domains)) {
      return Rx.Observable.fromArray(
        $.map(domains, function(domain) {
          if(domain && domain.name) {
            return {
              clientId: subAccount.id,
              domainId: domain.id,
              name: domain.name
            };
          } else {
            throw 'Unable to fetch domain name';
          }
        }));
    } else {
      throw 'Unable to fetch domains';
    }
  }

  function getUserSubAccounts(user, token) {
    if(user.metadata && user.metadata.related && $.isArray(user.metadata.related.sub_accounts)) {
      var promises = $.map(user.metadata.related.sub_accounts, function(subAccountUrl) {
        return apiGetPromise(subAccountUrl, token);
      });
      return Rx.Observable.fromArray(promises).flatMap(Rx.Observable.fromPromise);
    } else {
      throw 'Unable to fetch user';
    }
  }

  function postDomainsToWordpress($form, data, wordpressDomainName) {
    if($.isArray(data.domains)) {
      var wordpressDomains = data.domains.filter(function(domain) {
        return domain.name === wordpressDomainName;
      });

      if(wordpressDomains[0]) {
        var wordpressDomain = wordpressDomains[0];
        $form.find('[name="domain_id"]').val(wordpressDomain.domainId);
        $form.find('[name="client_id"]').val(wordpressDomain.clientId);
      }

      var domainNames = $.map(data.domains, function(domain) {
        return domain.name;
      });

      $form.find('[name="user_id"]').val(data.userId);
      $form.find('[name="domains"]').val(domainNames.join(','));
    }

    $form.submit();
  }

  function failureUI($form, $submitButton, originalText) {
    var message = $('<div class="error">').text('Sorry, something went wrong when Authenticating with Unbounce. Please try again.');
    $form.append(message);
      $submitButton.attr('disabled', false).val(originalText);
  }

  function loadingUI($submitButton, text) {
    $submitButton.attr('disabled', true).val(text);
  }

  $(document).ready(function(){
    var $submitButton = $('#set-unbounce-domains');

    if($submitButton[0]) {
      var $form = $($submitButton[0].form),
          originalText = $submitButton.val(),
          loadingText = 'Authorizing...',
          apiUrl = $submitButton.attr('data-api-url'),
          redirectUri = $submitButton.attr('data-redirect-uri'),
          apiClientId = $submitButton.attr('data-api-client-id'),
          wordpressDomainName = $submitButton.attr('data-wordpress-domain-name'),
          getTokenUrl = apiUrl + '/oauth/authorize?response_type=token&client_id=' + apiClientId + '&redirect_uri=' + redirectUri,
          getUserUrl = apiUrl + '/users/self?limit=1000',
          getSubAccountsUrl = apiUrl + '/accounts/{accountId}/sub_accounts',
          getSubAccountUrl = apiUrl + '/sub_accounts/{subAccountId}',
          getDomainsUrl = apiUrl + '/sub_accounts/{subAccountId}/domains?limit=1000',
          setDomainsUrl = $form.attr('action'),
          matches = location.hash.match(/access_token=([a-z0-9]+)/),
          accessToken = matches && matches[1];

      $submitButton.click(function(e) {
        e.preventDefault();

        document.location = getTokenUrl;

        return false;
      });

      if(accessToken) {
        loadingUI($submitButton, loadingText);

        var userObservable = apiGet(getUserUrl, accessToken).publish(),
            domainsObservable = userObservable
              .flatMap(function(user) {
                return getUserSubAccounts(user, accessToken);
              }).flatMap(function (subAccount) {
                return apiGet(getDomainsUrl.replace('{subAccountId}', subAccount.id), accessToken)
                  .flatMap(function(response) {
                    return getDomainData(subAccount, response.domains);
                  });
              }).toArray().publish(),
            userDomainsObservable = Rx.Observable.zip(
              userObservable,
              domainsObservable,
              function(user, domains) {
                return {userId: user.id, domains: domains};
              }).publish(),
            subscription = userDomainsObservable.subscribe(
              function (domains) {
                postDomainsToWordpress($form, domains, wordpressDomainName);
              },
              function (error) {
                failureUI($form, $submitButton, originalText);
                console.log('[ub-wordpress]', error);
              },
              function () {
                // toArray will ensure that onNext is called only once. We'll consider that 'completed'
                // as we'll also have access to the list of domains
              });

        userDomainsObservable.connect();
        domainsObservable.connect();
        userObservable.connect();
      }
    }
  });
})(jQuery);
