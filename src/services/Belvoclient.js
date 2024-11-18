import axios from "axios";
const { VITE_BELVO_API, VITE_BELVO_USER, VITE_BELVO_PASS } = import.meta.env;
const belvoAxios = axios.create({
  baseURL: VITE_BELVO_API,
  auth: {
    username: VITE_BELVO_USER,
    password: VITE_BELVO_PASS, 
  },
});

export default belvoAxios;
