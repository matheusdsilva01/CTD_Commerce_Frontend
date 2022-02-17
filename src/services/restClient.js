import axios from 'axios';
import products from '../assets/data/products';


const respClient = axios.create({
  baseURL: 'https://ctd-e-commerce.herokuapp.com/'
})

async function checkDatabase() {
  let response = await respClient.get("/products")
  if (response.data.length === 0) {
    await respClient.post("/products", products)
  }
  window.location.reload()
}

checkDatabase();
export default respClient;