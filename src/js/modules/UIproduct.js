import data from '../data'
import { itemSwiper } from './swiper'
import Swiper from 'swiper/bundle'

import toggle from './toggleDescription'

const URL = window.location.search
const params = new URLSearchParams(URL)
// let id
// for(const value of params.values()){
//   id = parseFloat(value)
// }
let id = parseFloat(params.get('id'))

const item = data.find(item => item.id === id)
console.log(item)


const itemImg = item => {
	const itemSlider = document.createElement('div')
	itemSlider.classList.add('item__slider')
	itemSlider.setAttribute('data-id', item.id)

	const [img1, img2, img3] = item.images
	const [thumb1, thumb2, thumb3, thumb4] = item.thumbs

	itemSlider.innerHTML = `<div class="item__thumbs">
          <div class="item__thumb active" data-index="0">
            <img src="${thumb1}" alt="" class="item__thumb-img">
          </div>
          <div class="item__thumb active" data-index="1">
            <img src="${thumb2}" alt="" class="item__thumb-img">
          </div>
          <div class="item__thumb active" data-index="1">
            <img src="${thumb3}" alt="" class="item__thumb-img">
          </div>
          <div class="item__thumb active" data-index="1">
            <img src="${thumb4}" alt="" class="item__thumb-img">
          </div>
        </div>
        <div class="swiper item__swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide item__swiper-box">
              <img src="${item.image}" alt="" class="item__swiper-img">
            </div>
            <div class="swiper-slide item__swiper-box">
              <img src="${img1}" alt="" class="item__swiper-img">
            </div>
            <div class="swiper-slide item__swiper-box">
              <img src="${img2}" alt="" class="item__swiper-img">
            </div>
            <div class="swiper-slide item__swiper-box">
              <img src="${img3}" alt="" class="item__swiper-img">
            </div>
          </div>
        </div>`

	

        const itemSwiper = new Swiper('.item__swiper',{
          spaceBetween:20,
          loop:true,
        
          
        })
	return itemSlider
}

const itemInfo = item => {
	const itemInfo = document.createElement('div')
	itemInfo.classList.add('item__info')

	itemInfo.innerHTML = ` <div class="item__info-sticky">
          <h1 class="item__title">${item.title}</h1>
          <span class="item__code">Index: ${item.index}</span>
          <span class="item__price">$${item.price}</span>
          <form class="item__form">
            <div class="item__variant">
              <div class="item__variant-title"><b>Size</b> - select size</div>
              <div class="item__variant-select">
                <div class="item__variant-pick">
                  <input type="radio" class="item__variant-input" id="variant-id-1">
                  <label for="variant-id-1" class="item__variant-label">1</label>
                </div>
                <div class="item__variant-pick">
                  <input type="radio" class="item__variant-input" id="variant-id-2">
                  <label for="variant-id-2" class="item__variant-label">2</label>
                </div>
                <div class="item__variant-pick">
                  <input type="radio" class="item__variant-input" id="variant-id-3">
                  <label for="variant-id-3" class="item__variant-label">3</label>
                </div>
                <div class="item__variant-pick">
                  <input type="radio" class="item__variant-input" id="variant-id-4">
                  <label for="variant-id-4" class="item__variant-label">4</label>
                </div>
              </div>
            </div>
            <button class="item__button">Add to cart</button>
          </form>
          <div class="item__promotion"><b>-30%</b> on all goods</div>

          <div class="item__delivery">
            <ul class="item__delivery-list">
              <li class="item__delivery-li"><i class='bx bxs-truck'></i>Shipping in 24-72h</li>
              <li class="item__delivery-li"><i class='bx bx-wallet'></i>Free delivery from $149</li>
              <li class="item__delivery-li"><i class='bx bxs-hourglass-top'></i>30 days to return</li>
            </ul>
          </div>

        </div>`

	return itemInfo
}

const itemDescription = item => {
	const itemDesc = document.createElement('div')
	itemDesc.classList.add('item__desc')
	itemDesc.innerHTML = ` <div class="item__details">
          <p class="item__desc-title ">Product description</p>
          <p class="item__desc-info">${item.description}</p>
        </div>

        <div class="item__details">
          <p class="item__desc-title ">Shipping</p>
          <div class="item__desc-methods">
            <p class="item__desc-subtitle">Free delivery from $149</p>
            <p class="item__desc-methods-title">Delivery methods:</p>
            <ul class="item__desc-methods-item">
              <li>Stationary store - Free of charge! (1-3 working days)</li>
              <li>Inpost courier - PLN 13.90 (1 working day)</li>
              <li>InPost parcel machines - PLN 15.90 (1 working day)</li>
            </ul>
            <p class="item__desc-link">More information on delivery <a href="@">here.</a></p>
          </div>
        </div>`

        const descToggle = itemDesc.querySelectorAll('.item__desc-title')
       
        
        descToggle.forEach(item=>item.addEventListener('click',toggle(descToggle)))
        

	return itemDesc
}

const itemContainer = document.querySelector('.item__container')

const addItem = item => {
	if (itemContainer) {
		itemContainer.append(itemImg(item), itemInfo(item), itemDescription(item))
	}
}

addItem(item)
