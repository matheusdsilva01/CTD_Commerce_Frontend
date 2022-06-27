import axios from 'axios';

const respClient = axios.create({
  baseURL: `http://${window.location.hostname}:3001/`
})

export default respClient;