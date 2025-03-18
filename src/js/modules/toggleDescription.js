const toggle = (descToggle) => {
	

	const toggleDesc = e => {
		const desc = e.target
       
		if (!desc.matches('.hide')) {
			hideDesc()
			desc.classList.add('hide')
		} else {
			desc.classList.remove('hide')
		}
	}

	const hideDesc = () => {
		descToggle.forEach(item => {
			item.classList.remove('hide')
		})
	}

	

    return toggleDesc
}

export default toggle
