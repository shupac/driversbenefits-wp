(function($) {
  $(document).ready(function(){
    function updateResultMessage(messageText, type) {
      var message = $('<p>')
            .text(messageText),
          wrapper = $('<div>')
            .addClass(type)
            .html(message);
      $("#ub-diagnostics-copy-result").html(wrapper);
    }

    var clipboard = new Clipboard('#ub-diagnostics-copy');

    clipboard.on('success', function(e) {
      updateResultMessage('Copied to clipboard.', 'updated');
    });

    clipboard.on('error', function(e) {
      updateResultMessage('Press Ctrl-C/Cmd-C to copy to your clipboard.', 'update-nag');
    });
  });
})(jQuery);
