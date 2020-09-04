const ASSETS = '/wp-content/themes/drivers-benefits/assets/'
const fadeIn = (el) =>
	setTimeout(() => {
		el.fadeTo(500, 1)
	}, 100)
const getOffset = () => (window.innerWidth <= 800 ? 60 : 120)
const getLang = () => {
	const urlParams = new URLSearchParams(window.location.search)
	return urlParams.get('lang')
}
