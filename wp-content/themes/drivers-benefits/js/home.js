$(document).ready(() => {
	const benefits = $('.home__benefits')
	const benefitsGrid = $('.home__benefits_grid')

	const benefitsShadow = $('.home__benefits_shadow')
	const header = benefitsShadow.find('h3').html()
	$(
		$.parseHTML(
			`<a class="home__benefits_header" href="/benefits"><h3>${header}</h3></a>`
		)
	).prependTo(benefits)

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
					<p>${description}</p>
				</a>
			`)

			$(benefit).appendTo(benefitsGrid)
		})

	benefitsShadow.parent().parent().remove()

	const partnersWrapper = $('.home__partners_wrapper')
	const partners = $('.home__partners')
		.attr('class', 'home__partners')
		.appendTo(partnersWrapper)
	const gallery = $('<div class="home__partners_gallery"></div>').appendTo(
		partners
	)
	partners.find('img').each((index, el) => {
		const $el = $(el)
		$el.attr('class', null).appendTo(gallery)
	})
	partners.find('figure').remove()

	const sections = [benefits, partners, partnersWrapper]
	sections.forEach((el) => fadeIn(el))
})
