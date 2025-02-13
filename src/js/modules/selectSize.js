const input = document.querySelectorAll('.item__variant-input')
const label = document.querySelectorAll('.item__variant-label')

const toggleCheck = () =>{
    input.forEach(item => {
        console.log(item.checked);
        item.checked = false
    })
}

label.forEach(item=> item.addEventListener('click',toggleCheck))