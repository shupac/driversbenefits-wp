const { hash } = window.location

const getOffset = () => (window.innerWidth <= 800 ? 60 : 120)

$(document).ready(() => {
	const benefits = $('.benefits__benefits')

	$('.benefits__benefit_shadow').each((index, el) => {
		const $el = $(el)
		const id = $el.attr('id')
		const isOpen = hash.substring(1) === id
		const content = $($el.children()[0])
			.attr('class', 'benefits__benefit_content')
			.attr('id', `benefit-${id}-content`)

		const titleShadow = content.find('.benefits__benefit_title_shadow')
		const title = titleShadow.html()
		titleShadow.remove()

		const imageShadow = content.find('.benefits__benefit_image_shadow')
		const image = imageShadow.find('img').attr('src')
		imageShadow.remove()

		const summary = content.find('.benefits__benefit_summary')

		const benefit = $(
			$.parseHTML(`
			<div class="benefits__benefit">
				<img class="benefits__benefit_image" src="${image}" />
				<div class="benefits__benefit_main">
					<a
						id="benefit-${id}"
						class="benefits__benefit_title"
						data-toggle="collapse"
						href="#benefit-${id}-content"
						aria-expanded="${isOpen}"
						aria-controls="${id}"
					>
						<h3>
							${title}
						</h3>
					</a>
					<button
						class="benefits__benefit_toggle"
						aria-expanded="${isOpen}"
						aria-controls="${id}"
					>
						<img src="${ASSETS}/icon-arrow-down.png">
					</button>
				</div>
			</div>
		`)
		)
		const main = benefit.find('.benefits__benefit_main')
		benefit.appendTo(benefits)
		summary.appendTo(main)
		if (isOpen) content.addClass('show')
		content.addClass('collapse').appendTo(main)

		const toggle = benefit.find('.benefits__benefit_toggle')
		const benefitContent = benefit.find('.benefits__benefit_content')
		const benefitTitle = benefit.find('.benefits__benefit_title')
		toggle.click((e) => {
			const bodyRect = document.body.getBoundingClientRect()
			benefitTitle.click()
			$('html, body').animate(
				{
					scrollTop: benefitTitle.offset().top - getOffset(),
				},
				500
			)
		})

		$el.remove()
	})

	fadeIn(benefits)

	setTimeout(() => {
		const offset = $(`#benefit-${hash.substring(1)}`).offset()
		offset && window.scrollTo(0, offset.top - getOffset())
	}, 100)
})
