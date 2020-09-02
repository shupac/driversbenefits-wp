$(document).ready(() => {
	const container = $($('.wp-block-group__inner-container').get(0))
	const articles = $($.parseHTML(`<div class="news__articles"></div>`))
	articles.appendTo(container)
	container.find('article').each((index, el) => {
		const $el = $(el).attr('id', null).attr('class', 'news__article')
		$el.appendTo(articles)
	})
	$('.news__grid_shadow').remove()

	setTimeout(() => {
		articles.fadeTo(500, 1)
		$('.news__container').fadeTo(500, 1)
	}, 10)
})
