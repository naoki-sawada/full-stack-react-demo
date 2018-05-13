import { combineReducers } from 'redux';
import { test } from './modules/test';
import { books } from './modules/books';
import { cart } from './modules/cart';

export default combineReducers({
  test,
  books,
  cart,
});