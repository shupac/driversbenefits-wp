const benefits = $('.home__benefits');
const benefitsGrid = $('.home__benefits_grid');

const benefitsShadow = $('.home__benefits_shadow');
const benefitsGridShadow = benefitsShadow.find('.ab-block-layout-column-inner');
benefitsShadow.find('h3').prependTo(benefits).attr('class', '');

benefitsGridShadow.find('> :not(.wp-block-atomic-blocks-ab-profile-box)').remove();
benefitsGridShadow.children().each((index, el) => {
	const $el = $(el);
	const image = $el.find('img').attr('src');
	const name = $el.find('h2').html();
	const description = $el.find('.ab-profile-text p').html();
	const hash = name.toLowerCase().replace(' ', '-');
	const benefit = $.parseHTML(`
		<a class="home__benefit" href="/benefits/${hash}">
			<img src="${image}" alt="${name}"/>
			<h4>${name}</h4>
			<small>${description}</small>
		</a>
	`);

	$(benefit).appendTo(benefitsGrid);
});

benefitsGridShadow.parent().parent().remove();


setTimeout(() => {
	benefits.fadeTo(100, 1);
}, 10);
