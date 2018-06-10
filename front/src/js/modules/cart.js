import { call } from 'redux-saga/effects';
import moducks from './moducks';
import { bookshop } from '../utils/apis';

const defaultState = {
  cart: {},
  totalAmount: 0,
  totalQty: 0,
};

export const {
  cart, sagas,
  getCart, postCart, 
  addToCart, updateCart, deleteCartItem,
} = moducks.createModule('cart', {
  GET_CART: {
    saga: function* (action) {
      const cart = yield call(bookshop.getCart);
      if (typeof cart === 'object') {
        return updateCart(cart);
      }
    },
  },
  POST_CART: {
    saga: function* (action) {
      yield call(bookshop.postCart, action.payload);
    },
  },
  ADD_TO_CART: {
    // reducer: state => ({ ...state }),
    saga: function* (action) {
    },
  },
  UPDATE_CART: {
    reducer: (state, action) => ({ ...state, cart: action.payload }),
  },
  DELETE_CART_ITEM: {
    reducer: state => ({ ...defaultState }),
  },
}, defaultState);
