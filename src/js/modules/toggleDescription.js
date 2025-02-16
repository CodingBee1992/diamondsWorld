const itemDesc = document.querySelectorAll('.item__desc-title')

const toggleDesc = e => {
	const desc = e.target
    
    
    
    if(!desc.matches('.hide')){
        hideDesc()
        desc.classList.add('hide')
    }else{
        desc.classList.remove('hide')
    }

    
	

}

const hideDesc = () => {
	itemDesc.forEach(item => {
		
			item.classList.remove('hide')
		
	})
}

itemDesc.forEach(item => item.addEventListener('click', toggleDesc))
