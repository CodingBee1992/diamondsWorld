import Swiper from 'swiper/bundle'

// ========= SWIPER REVIEWS =============

const swiper = new Swiper('.reviews-swiper', {
	spaceBetween: 30,
	loop: true,
	// pagination:{
    //     el: '.swiper-slide',
    //     type:'bullets',
    // },
	autoplay: {
		delay: 10000,
	},

	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next',
	},
})


const newSwiper = new Swiper('.new__swiper',{
	
	spaceBetween: 24,
	loop:true,

	breakpoints:{
		576:{
			slidesPerView:2
		},
		768:{
			slidesPerView:3
		},
		1024:{
			slidesPerView:4
		}
	}
})

const productSwiper = new Swiper('.product__swiper',{
	loop: true,
	spaceBetween:5,

	slidesPerView:4
	
	
})

const itemSwiper = new Swiper('.item__swiper',{
	spaceBetween:20,
	loop:true,

	autoplay: {
		delay: 5000,
	},
})