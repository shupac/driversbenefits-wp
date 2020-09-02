$(document).ready(() => {
	const wrapper = $($('.footer__posts')[0])
	const covid = $('.posts__covid')
		.attr('class', 'posts__covid')
		.appendTo(wrapper)
	const news = $('.posts__news').attr('class', 'posts__news').appendTo(wrapper)

	const covidTitle = covid.find('h2')
	const covidLink = $.parseHTML(
		`<a class="posts__title" href="/covid-19"><h2>${covidTitle.html()}</h2></a>`
	)
	$(covidLink).prependTo(covid.find('h2').parent())
	covidTitle.remove()

	const covidGrid = covid
		.find('.ab-post-grid-items')
		.attr('class', 'posts__covid_grid')
	covidGrid.children().each((index, el) => {
		const $el = $(el)
		$el.find('a').attr('class', 'posts__covid_item').appendTo(covidGrid)
		$el.remove()
	})

	const newsTitle = news.find('h2')
	const newsLink = $.parseHTML(
		`<a class="posts__title" href="/news"><h2>${newsTitle.html()}</h2></a>`
	)
	$(newsLink).prependTo(news.find('h2').parent())
	newsTitle.remove()

	const newsGrid = news
		.find('.ab-post-grid-items')
		.attr('class', 'posts__news_grid')
	newsGrid.children().each((index, el) => {
		const $el = $(el)
		const image = $el.find('img')
		const link = $el.find('.ab-block-post-grid-title a')

		const sizes = image
			.attr('srcset')
			.split(', ')
			.map((str) => {
				const [url, width] = str.split(' ')
				return { url, width: Number(width.substring(0, width.length - 1)) }
			})
			.sort((a, b) => a.width - b.width)
		const imageSrc = sizes[0].url

		const title = link.html()
		const url = link.attr('href')
		const item = $.parseHTML(`
		<a class="posts__news_item" href="${url}">
			<img src="${imageSrc}" />
			<div>${title}</div>
		</a>
	`)
		$(item).appendTo(newsGrid)
		$el.remove()
	})

	const sections = [wrapper, covid, news]
	sections.forEach((el) => fadeIn(el))
})
