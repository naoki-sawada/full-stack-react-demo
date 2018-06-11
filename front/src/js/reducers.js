import { combineReducers } from 'redux';
import { books } from './modules/books';
import { cart } from './modules/cart';
import { notice } from './modules/notice';

export default combineReducers({
  books,
  cart,
  notice,
});