import axios from 'axios';

const respClient = axios.create({
  baseURL: 'https://ctdcommercebackend-production.up.railway.app/'
})

export default respClient;