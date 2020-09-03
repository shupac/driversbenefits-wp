$(document).ready(() => {
	$('.ab-block-accordion').each((index, el) => {
		const $el = $(el)
		const summary = $el.find('summary').html()
		const textEl = $el
			.find('.ab-accordion-text')
			.attr('class', 'db__accordion_text collapse')
			.attr('id', `accordion-${index}-content`)

		$el.replaceWith(`
			<div class="db__accordion" id="accordion-${index}">
				<a
					id="accordion-${index}"
					class="db__accordion_summary"
					data-toggle="collapse"
					href="#accordion-${index}-content"
					aria-expanded="false"
					aria-controls="${index}"
				>
					<h4>
						${summary}
					</h4>
				</a>
				<button
					class="db__accordion_toggle"
					aria-expanded="false"
					aria-controls="${index}"
				>
					<img src="${ASSETS}/icon-arrow-down.png">
				</button>
			</div>
		`)

		const accordion = $(`#accordion-${index}`)
		textEl.appendTo(accordion)

		const accordionSummary = accordion.find('.db__accordion_summary')
		const accordionToggle = accordion.find('.db__accordion_toggle')
		accordionToggle.click((e) => {
			const bodyRect = document.body.getBoundingClientRect()
			accordionSummary.click()
			$('html, body').animate(
				{
					scrollTop: accordionSummary.offset().top - getOffset(),
				},
				500
			)
		})
	})
})
