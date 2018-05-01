import { createModule } from 'moducks';

const defaultState = {
  counter: 0,
};

export const {
  test, sagas,
  testIncrement, testDecrement, testClear,
} = createModule('cart', {
  GET_CART: {
    reducer: state => ({ counter: state.counter + 1 }),
    saga: function* (action) {
      console.log("increment!!!");
    },
  },
  ADD_TO_CART: {
    reducer: state => ({ counter: state.counter - 1 }),
  },
  UPDATE_CART: {
    reducer: state => ({ ...defaultState }),
  },
  DELETE_CART_ITEM: {
    reducer: state => ({ ...state }),
  },
}, defaultState);