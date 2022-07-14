import axios from 'axios';

const respClient = axios.create({
  baseURL: 'https://ctd-e-commerce.herokuapp.com/'
})

export default respClient;
