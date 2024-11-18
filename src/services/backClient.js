import axios from "axios";
const { VITE_BACK_URL } = import.meta.env;
const backendAxios = axios.create({
  baseURL: VITE_BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default backendAxios;
