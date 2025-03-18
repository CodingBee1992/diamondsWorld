// ============= SWAP MAIN IMG =============
const cardList = document.querySelectorAll('.product__swiper-card')
const swiperWraper = document.querySelectorAll('.swiper-wrapper')
const prevImg = (e)=>{
    const mainSrc = e.target.parentElement.parentElement.parentElement.previousElementSibling.firstChild.nextElementSibling.getAttribute('src')
   
   
   
   
}
const changeImg = (e)=>{
    e.preventDefault();
   
    const swapImg = e.target.parentElement.parentElement.parentElement.previousElementSibling.firstChild.nextElementSibling
   
    const targetImg = e.target.getAttribute('src')

    
    swapImg.setAttribute('src', targetImg)
    
}






cardList.forEach(item => item.addEventListener('mousemove',changeImg))
cardList.forEach(item => item.addEventListener('mouseout',prevImg))

