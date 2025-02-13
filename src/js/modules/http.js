import axios from 'axios'

async function get(url){
    try{
        const res = await axios.get(url)
        const resData = await res.data
        console.log(resData);
        return resData

    }catch{

    }
}


export {
    get,
}