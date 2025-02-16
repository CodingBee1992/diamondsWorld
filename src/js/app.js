import Swiper from 'swiper'
import 'swiper/css'
import '../sass/style.scss'
import './modules/navbar'
import './modules/swiper'
import './modules/toggleDescription'
import './modules/selectSize'
import './modules/summaryObserver'
import './modules/swapImage'

// import './modules/uiItem'


import { getItems } from './modules/productData'
import { addItem } from './modules/UIproduct'

const product = document.querySelectorAll('.product__card')



const createCard = e => {
	// e.preventDefault()

	if (e.target.matches('.product__tag-card')) {
		const cardId = e.target.parentElement.dataset.id

		// cardId to number
		const id = parseInt(cardId)

        const productts = getItems()

        
		addItem(id, productts)
	}
}

product.forEach(item => item.addEventListener('click', createCard))
