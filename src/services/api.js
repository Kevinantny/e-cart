// services/api.js
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com'; // Replace with your API base URL

export const getProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};
