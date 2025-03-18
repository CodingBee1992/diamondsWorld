import quartz from '../assets/img/productsD.jpg'
import crystal from '../assets/img/crystal.jpg'
import d3 from '../assets/img/d3.png'
import flyd from '../assets/img/flyd.jpg'
import topaz from '../assets/img/topaz.jpg'
import img1 from '../assets/img/d1.jpg'
import img2 from '../assets/img/d2.jpg'
import img3 from '../assets/img/d5.jpg'
import img4 from '../assets/img/d4.jpg'
const data = [
	{
		id: 1,
		index: '#94385384',
		title: 'Quartz',
        category: 'Luxury',
		image: quartz,
		images: [crystal, d3, flyd, topaz],
		price: 777,
		description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
		thumbs:[img1,img2,img3,img4]
	},
	{
		id: 2,
		index: '#54385384',
		title: 'Crystal',
        category: 'Luxury',
		image: crystal,
		images: [quartz, d3, flyd, topaz],
		price: 7777,
		description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
		thumbs:[img1,img2,img3,img4]
	},
	{
		id: 3,
		index: '#14385384',
		title: 'Emerald',
        category: 'Luxury',
		image: d3,
		images: [crystal, quartz, flyd, topaz],
		price: 77,
		description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
		thumbs:[img1,img2,img3,img4]
	},
	{
		id: 4,
		index: '#24436384',
		title: 'Flyd',
        category: 'Luxury',
		image: flyd,
		images: [crystal, d3, quartz, topaz],
		price: 77777,
		description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
		thumbs:[img1,img2,img3,img4]
	},
	{
		id: 5,
		index: '#94385384',
		title: 'Topaz',
        category: 'Luxury',
		image: topaz,
		images: [crystal, d3, flyd, quartz],
		price: 777777,
		description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
		thumbs:[img1,img2,img3,img4]
	},
	{
		id: 6,
		index: '#7777777',
		title: 'Diament',
        category: 'Luxury',
		image: img1,
		images: [img2, d3, flyd, quartz],
		price: 777777,
		description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
		thumbs:[img1,img2,img3,img4]
	},
]

export default data