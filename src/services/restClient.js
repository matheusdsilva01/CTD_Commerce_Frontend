import axios from 'axios';

const respClient = axios.create({
  baseURL: 'https://api-ctd-commerce.onrender.com/'
})

export default respClient;
