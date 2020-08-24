const menuShadow = $('#menu-top-menu')
const languageShadow = menuShadow.children()[0]
const phoneShadow = menuShadow.children()[1]
const signupShadow = menuShadow.children()[2]

const header = $('.header__header')
const currLangButton = header.find('button')
const langMenu = header.find('.dropdown-menu')
const signup = header.find('.header__signup')

function getLangData(langEl) {
	const flag = $(langEl).find('img').attr('src').replace('en.png', 'us.png')
	const language = $(langEl).find('.wpml-ls-native').html()
	const url = $(langEl).attr('href')
	return { flag, language, url }
}

const currLangData = getLangData($(languageShadow).children()[0])
currLangButton.find('.header__flag img').attr('src', currLangData.flag)
currLangButton.find('.header__lang').html(currLangData.language)

$(languageShadow)
	.find('.sub-menu a')
	.each((index, langEl) => {
		const { flag, language, url } = getLangData(langEl)
		const item = $.parseHTML(`
	    <a class="dropdown-item" href="${url}">
		  	<div class="header__flag">
			  	<img src="${flag}">
		  	</div>
		  	<div class="header__lang">${language}</div>
			</a>
		`)
		$(item).appendTo(langMenu)
	})

$(phoneShadow).find('a').appendTo('.header__phone')

const signupUrl = $(signupShadow).find('a').attr('href')
const signupText = $(signupShadow).find('a').html()

signup.attr('href', signupUrl)
signup.find('button').html(signupText)

setTimeout(() => {
	header.fadeTo(500, 1)
}, 10)

setTimeout(() => {
	$('.header__shadow').fadeTo(0, 1)
}, 500)

menuShadow.parent().remove()
