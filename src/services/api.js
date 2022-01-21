import axios from "axios";

const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/"

});

api.interceptors.request.use(config => {
  config.params = {
    // add your default ones
    api_key: `${API_KEY}`,
    language: 'pt-BR',
    // spread the request's params
    ...config.params,
  };
  return config;
});



export default api;