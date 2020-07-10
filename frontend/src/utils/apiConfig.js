import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
});

export const getData = (response) => {
  return response.data;
};

export default instance;
