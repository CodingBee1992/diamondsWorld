// import styles bundle
// import 'swiper/css/bundle';

// ============ SHOW MENU ==========
const toggleBtn = document.querySelector('#nav-toggle')
const navMenu = document.querySelector('#nav-menu')
const navLinks = document.querySelectorAll('.nav__link')

const toggleMenu = () => {
	navMenu.classList.toggle('show-menu')
}
// Listener on toggleBtn
toggleBtn.addEventListener('click', toggleMenu)
// Listener on navMenu Links
navLinks.forEach(item => item.addEventListener('click', toggleMenu))

// ========= ADDING NAVBAR SHADOW ========
const header = document.querySelector('#header')

const toggleShadow = () => {
	const scrollY = window.scrollY

	scrollY > 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', toggleShadow)

// =========== SHOW SCROLL TOP ICON =========
const scrollTopBtn = document.querySelector('#scroll-top')

const showScrollTop = ()=>{
    const scrollY = window.scrollY

    scrollY > 350 ? scrollTopBtn.style.display = 'flex' : scrollTopBtn.style.display = 'none'
}
window.addEventListener('scroll',showScrollTop)

// ============ CHANGE THEME ========

const themeBtn = document.querySelector('#theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-moon'

// Previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.matches(`.${lightTheme}`) ? 'light' : 'dark')
const getCurrentIcon = () => (themeBtn.matches(`.${iconTheme}`) ? 'bx-moon' : 'bx-sun')

// Validate if the user previously chose topic
if (selectedTheme) {
	// If the validation is fullfiled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
	// themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
	if(selectedIcon === 'bx-moon'){
		themeBtn.classList.remove('bx-sun')
		themeBtn.classList.add('bx-moon')
	}else{
		themeBtn.classList.remove('bx-moon')
		

	}
}

const changeTheme = () => {
	document.body.classList.toggle(lightTheme)
	// themeBtn.classList.toggle(iconTheme)
	if(themeBtn.matches('.bx-sun')){
		themeBtn.classList.remove('bx-sun')
		themeBtn.classList.add(iconTheme)
	}else{
		themeBtn.classList.add('bx-sun')
		themeBtn.classList.remove(iconTheme)

	}

	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
}
themeBtn.addEventListener('click', changeTheme)


// ============= SCROLL SECTION ACTIVE LINK ==========

const sections = document.querySelectorAll('.section')

const scrollActive = ()=>{
	const scrollY  =window.scrollY
	
	sections.forEach(item=>{
		const sectionTop = item.offsetTop - 200
		const sectionHeight = item.offsetHeight
		const sectionId = item.getAttribute('id')
		
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			const activeSection = document.querySelector(`[href*="${sectionId}"]`)
			
			
			navLinks.forEach(item => item.classList.remove('active'))

			activeSection.classList.add('active')
		}

	})
}

window.addEventListener('scroll',scrollActive)
