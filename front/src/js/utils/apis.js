import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/api';
const BASE_URL = '/api';

export const bookshop = {
  async getBooks() {
    try {
      const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await instance.get('/books');
      return data;
    } catch (e) {
      throw new Error(e);
    }
  },
  async getCart() {
    try {
      const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await instance.get('/cart');
      return data;
    } catch (e) {
      throw new Error(e);
    }
  },
  async postCart(data) {
    try {
      const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const cart = await instance.post('/cart', data);
      console.log(cart);
      return cart;
    } catch (e) {
      throw new Error(e);
    }
  },
};
