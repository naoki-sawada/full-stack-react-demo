import { combineReducers } from 'redux';
import { test } from './modules/test';
import { books } from './modules/books';

export default combineReducers({
  test,
  books,
});