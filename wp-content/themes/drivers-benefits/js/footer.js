$(document).ready(() => {
	const footerCta = $('.footer__cta')
	const footerCtaShadow = $('.footer__cta_shadow')
	footerCtaShadow
		.find('.ab-cta-button a')
		.attr('style', null)
		.attr('class', 'btn btn-primary footer__cta_button')
		.appendTo(footerCta)
	// footerCtaShadow
	// 	.find('.home__cta_signin')
	// 	.attr('class', 'footer__cta_signin')
	// 	.appendTo(footerCta)
	footerCtaShadow.remove()
})
