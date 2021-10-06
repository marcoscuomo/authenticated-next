import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

api.interceptors.request.use(config => {
  console.log(config);

  return config;
})