import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://buybestthemes.com/mobile_app_api/realtor/api/',
});

export default instance;
