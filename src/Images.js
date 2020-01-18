import {storeProducts} from "./data"

const images = storeProducts.map((data) => {
   return { id: data.id, src: data.img, title: `phone${data.id}`} 
})

export default images;  