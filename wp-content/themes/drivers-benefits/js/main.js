const ASSETS = '/wp-content/themes/drivers-benefits/assets/'
const fadeIn = (el) =>
	setTimeout(() => {
		el.fadeTo(500, 1)
	}, 100)
const getOffset = () => (window.innerWidth <= 800 ? 60 : 120)
