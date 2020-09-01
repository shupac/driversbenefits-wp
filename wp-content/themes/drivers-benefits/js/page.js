$(document).ready(() => {
	const main = $('#main')
	const headerImage = main.find('.page__header_image img')
	main.find('.page__header_image').remove()
	headerImage.attr('class', 'page__header_image').prependTo(main)
})
