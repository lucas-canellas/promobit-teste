import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/",
  params: {

  }

});

api.interceptors.request.use(config => {
  config.params = {
    // add your default ones
    api_key: 'd680466ec4a78aa53efd51a42b703f2c',
    language: 'pt-BR',
    // spread the request's params
    ...config.params,
  };
  return config;
});



export default api;