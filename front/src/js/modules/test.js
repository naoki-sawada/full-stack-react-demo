import moducks from './moducks';

const defaultState = {
  counter: 0,
};

export const {
  test, sagas,
  testIncrement, testDecrement, testClear,
} = moducks.createModule('test', {
  TEST_INCREMENT: {
    reducer: state => ({ counter: state.counter + 1 }),
    saga: function* (action) {
      console.log("increment!!!");
    },
  },
  TEST_DECREMENT: {
    reducer: state => ({ counter: state.counter - 1 }),
  },
  TEST_CLEAR: {
    reducer: state => ({ ...defaultState }),
  },
}, defaultState);