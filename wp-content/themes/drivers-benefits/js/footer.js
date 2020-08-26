$(document).ready(() => {
	setTimeout(() => {
		const footerCta = $('.footer__cta')
		$('.home__cta .btn')
			.clone()
			.attr('class', 'btn btn-primary footer__cta_button')
			.prependTo(footerCta)
		$('.home__cta_signin')
			.clone()
			.attr('class', 'footer__cta_signin')
			.appendTo(footerCta)
	}, 100)
})
