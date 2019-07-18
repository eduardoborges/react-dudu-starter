import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/"
});

api.interceptors.request.use(req => {
  const token = localStorage.getItem("@TOKEN");
  if (token !== undefined) {
    console.log(token);
    req.headers.authentication = `Bearer ${token}`;
  }
  return req;
});

export default api;
