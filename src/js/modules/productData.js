const data ={
    products:[
        {
            id:1,
            name:"Diamond",
            index:"#832940232",
            price:3234,
            description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
            images:["../../assets/img/crystal.jpg","../../assets/img/productsD.jpg","../../assets/img/crystal.jpg","../../assets/img/productsD.jpg"],
            thumbs:["../../assets/img/crystal.jpg","../../assets/img/productsD.jpg","../../assets/img/crystal.jpg","../../assets/img/productsD.jpg"],
            
        },
        {
            id:2,
            name:"Ruby",
            index:"#14336578",
            price:1234,
            description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
            images:["../../assets/img/crystal.jpg","../../assets/img/productsD.jpg","../../assets/img/crystal.jpg","../../assets/img/productsD.jpg"],
            thumbs:["../../assets/img/crystal.jpg","../../assets/img/productsD.jpg","../../assets/img/crystal.jpg","../../assets/img/productsD.jpg"],
            
        },
        {
            id:3,
            name:"Topaz",
            index:"#114647389",
            price:7667,
            description:"Diamonds are precious gemstones formed from carbon under high-pressure and high-temperature conditions deep within the Earth's mantle.",
            images:["../../assets/img/crystal.jpg","../../assets/img/productsD.jpg","../../assets/img/crystal.jpg","../../assets/img/productsD.jpg"],
            thumbs:["../../assets/img/crystal.jpg","../../assets/img/productsD.jpg","../../assets/img/crystal.jpg","../../assets/img/productsD.jpg"],
            
        },
    ],

}

const getItems = ()=>{
    return data.products
}

export{
    getItems
}