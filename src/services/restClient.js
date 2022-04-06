import axios from 'axios';
import products from '../assets/data/products';


const respClient = axios.create({
  baseURL: 'https://ctd-e-commerce.herokuapp.com/'
})

async function checkDatabase() {
  let response = await respClient.get("/products")
  if (response.data.length === 0) {
    respClient.post("/products/list", products).then(() => {
      window.location.reload();
    }).then((e)=>{
      console.log(e)
    })
  }
}

checkDatabase();
export default respClient;