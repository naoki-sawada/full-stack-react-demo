import { createModule } from 'moducks';

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
  getBooks, postBooks, postBookRejected,
  resetButton, deleteBook, updateBook,
} = createModule('books', {
  GET_BOOKS: {
    reducer: (state, action) => ({ ...state, books: action.payload }),
  },
  POST_BOOK: {
    // reducer: state => ({ counter: state.counter - 1 }),
    saga: function* (action) {
      // POST logic
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