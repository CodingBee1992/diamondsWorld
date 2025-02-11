// ============= SWAP MAIN IMG =============
const cardList = document.querySelectorAll('.product__swiper-card')
const mainImg = document.querySelector('.product__box-img').getAttribute('src')
const swiperWraper = document.querySelectorAll('.swiper-wrapper')

const changeImg = (e)=>{
    e.preventDefault();
    const swapImg = e.target.parentElement.parentElement.parentElement.previousElementSibling
    
    const targetImg = e.target.getAttribute('src')

    console.log(mainImg);
    swapImg.setAttribute('src', targetImg)
    
}

const prevImg = ()=>{
    const swapImg = document.querySelectorAll('.product__box-img')
    swapImg.forEach(item=>{
        item.setAttribute('src',mainImg)
    })
}


cardList.forEach(item => item.addEventListener('mousemove',changeImg))
cardList.forEach(item => item.addEventListener('mouseout',prevImg))

