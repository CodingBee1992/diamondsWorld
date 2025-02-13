import Swiper from 'swiper'
import 'swiper/css'
import '../sass/style.scss'
import './modules/Navbar'
import './modules/swiper'
import './modules/ItemDesc'
import './modules/product'
import './modules/selectSize'
import './modules/createItem'
import jsonData from '../assets/api/item.json' assert { type: 'json' }
import { get } from './modules/http.js'

const product = document.querySelectorAll('.product__card')

const createCard = e => {
	// e.preventDefault()

	if (e.target.matches('.product__tag-card')) {
		const id = e.target.parentElement.dataset.id
		console.log(id)
	}
}

// const getItems = () => {
// 	http.get(jsonData).then(data => {
// 		console.log(data)
// 	})
// }

// getItems()
product.forEach(item => item.addEventListener('click', createCard))
