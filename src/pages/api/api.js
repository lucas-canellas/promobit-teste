import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/"

});

api.interceptors.request.use(config => {
  config.params = {
    // add your default ones
    api_key: process.env.API_KEY,
    language: 'pt-BR',
    // spread the request's params
    ...config.params,
  };
  return config;
});



export default api;