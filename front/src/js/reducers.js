import { combineReducers } from 'redux';
import { books } from './modules/books';
import { cart } from './modules/cart';

export default combineReducers({
  books,
  cart,
});