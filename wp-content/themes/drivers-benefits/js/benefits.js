const { hash } = window.location

$(document).ready(() => {
	const benefits = $('.benefits__benefits')

	$('.benefits__benefit_shadow').each((index, el) => {
		const $el = $(el)
		const id = $el.attr('id')
		const isOpen = hash.substring(1) === id
		const benefitContent = $($el.children()[0])
			.attr('class', 'benefits__benefit_content')
			.attr('id', `#benefit-${id}`)

		const titleShadow = benefitContent.find('.benefits__benefit_title_shadow')
		const title = titleShadow.html()
		titleShadow.remove()

		const imageShadow = benefitContent.find('.benefits__benefit_image_shadow')
		const image = imageShadow.find('img').attr('src')
		imageShadow.remove()

		const summary = benefitContent.find('.benefits__benefit_summary')

		const benefit = $(
			$.parseHTML(`
			<div class="benefits__benefit">
				<img class="benefits__benefit_image" src="${image}" />
				<div class="benefits__benefit_main">
					<a
						class="benefits__benefit_title"
						data-toggle="collapse"
						href="#benefit-${id}"
						aria-expanded="${isOpen}"
						aria-controls="${id}"
					>
						<h3>
							${title}
						</h3>
					</a>
				</div>
			</div>
		`)
		)
		benefit.appendTo(benefits)
		summary.appendTo(benefit)
		if (isOpen) benefitContent.addClass('show')
		benefitContent.addClass('collapse').appendTo(benefit)

		benefit.find('.benefits__benefit_title').click(() => {
			benefit.find('.benefits__benefit_content').collapse('toggle')
		})

		$el.remove()
	})

	fadeIn(benefits)
})
