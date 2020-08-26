$(document).ready(() => {
	const benefits = $('.home__benefits')
	const benefitsGrid = $('.home__benefits_grid')

	const benefitsShadow = $('.home__benefits_shadow')
	benefitsShadow.find('h3').prependTo(benefits).attr('class', null)

	const benefitsGridShadow = benefitsShadow.find(
		'.ab-block-layout-column-inner'
	)
	benefitsGridShadow
		.find('.wp-block-atomic-blocks-ab-profile-box')
		.each((index, el) => {
			const $el = $(el)
			const image = $el.find('img').attr('src')
			const hash = $el.find('.ab-profile-name').html()
			const name = $el.find('.ab-profile-title').html()
			const description = $el.find('.ab-profile-text p').html()
			const benefit = $.parseHTML(`
		<a class="home__benefit" href="/benefits/#${hash}">
			<img src="${image}" alt="${name}"/>
			<h4>${name}</h4>
			<small>${description}</small>
		</a>
	`)

			$(benefit).appendTo(benefitsGrid)
		})

	benefitsShadow.parent().parent().remove()

	const content = $('.home__content')
	const covid = $('.home__covid').attr('class', 'home__covid').appendTo(content)
	const news = $('.home__news').attr('class', 'home__news').appendTo(content)
	const partners = $('.home__partners').attr('class', 'home__partners')

	covid.find('h3').attr('class', null)
	const covidGrid = covid
		.find('.ab-post-grid-items')
		.attr('class', 'home__covid_grid')
	covidGrid.children().each((index, el) => {
		const $el = $(el)
		$el.find('a').attr('class', 'home__covid_item').appendTo(covidGrid)
		$el.remove()
	})

	news.find('h3').attr('class', null)
	const newsGrid = news
		.find('.ab-post-grid-items')
		.attr('class', 'home__news_grid')
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
		<a class="home__news_item" href="${url}">
			<img src="${imageSrc}" />
			<div>${title}</div>
		</a>
	`)
		$(item).appendTo(newsGrid)
		$el.remove()
	})

	const gallery = $('<div class="home__partners_gallery"></div>').appendTo(
		partners
	)
	partners.find('img').each((index, el) => {
		const $el = $(el)
		$el.attr('class', null).appendTo(gallery)
	})
	partners.find('figure').remove()

	setTimeout(() => {
		const sections = [benefits, content, covid, news, partners]
		sections.forEach((el) => {
			el.fadeTo(500, 1)
		})
	}, 100)
})
