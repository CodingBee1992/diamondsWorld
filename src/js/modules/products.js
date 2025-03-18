import data from '../data.js'


const products = () => {
	const container = document.querySelector('.product__container')

	data.forEach(item => {
		const productCard = document.createElement('div')
		productCard.classList.add('product__card')
		productCard.setAttribute('data-id', item.id)

		productCard.innerHTML = `<div class="product__tag" data-id=${item.id} data-name=${item.title} data-category=${item.category} data-price=${item.price} >
          <a href="item.html?id=${item.id} class="product__tag-card">
            <div class="product__box">
              <img src=${item.image} alt="" class="product__box-img">
             
            </div>
            <div class="swiper product__swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide product__swiper-card"><img src=${item.images[0]} alt="" class="product__swiper-img"></div>
                <div class="swiper-slide product__swiper-card"><img src=${item.images[1]} alt="" class="product__swiper-img"></div>
                <div class="swiper-slide product__swiper-card"><img src=${item.images[2]} alt="" class="product__swiper-img"></div>
                <div class="swiper-slide product__swiper-card"><img src=${item.images[3]} alt="" class="product__swiper-img"></div>
              </div>
            </div>
            <div class="product__desc">
              <span class="product__desc-title">${item.title}</span>
              <span class="product__desc-price">$${item.price}</span>
            </div>
          </a>
        </div>`

		if (container) {
			container.append(productCard)
		}
	})
	
}

products()
