/* eslint-disable no-console */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

// request interceptor
api.interceptors.request.use((req) => {
  // muda suas paradas
  console.log(req);
  return req;
});

// Response interceptor
api.interceptors.response.use((resp) => {
  // muda suas paradas
  console.log(resp);
  return resp;
});

export default api;
