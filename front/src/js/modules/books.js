import { call } from 'redux-saga/effects';
import { createModule } from 'moducks';
import { bookshop } from '../utils/apis';

const defaultState = {
  // books: [],
  books: [{
    title: "hoge",
    description: "huga",
    price: 1280,
    images: ["https://orig00.deviantart.net/7e56/f/2016/060/a/b/free_to_use_miku_hatsune_icon_by_awato-d9td8pd.png"]
  }],
};

export const {
  books, sagas,
  setBooks, getBooks, postBook, postBookRejected,
  resetButton, deleteBook, updateBook,
} = createModule('books', {
  SET_BOOKS: {
    reducer: (state, action) => ({ ...state, books: action.payload }),
  },
  GET_BOOKS: {
    saga: function* (action) {
      const books = yield call(bookshop.getBooks);
      return setBooks(Array.isArray(books) ? books : []);
    },
    onError: (e, action) => {
      console.error(e, action);
    },
  },
  POST_BOOK: {
    saga: function* (action) {
      const books = yield call(bookshop.postBooks, action.payload);
    },
    onError: (e, action) => {
      console.error(e, action);
    },
  },
  POST_BOOK_REJECTED: {
    reducer: state => ({ ...defaultState }),
  },
  RESET_BUTTON: {
    reducer: state => ({ ...defaultState }),
  },
  DELETE_BOOK: {
    reducer: state => ({ ...defaultState }),
  },
  UPDATE_BOOK: {
    reducer: state => ({ ...defaultState }),
  },
}, defaultState);