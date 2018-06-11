import { call, select, fork, put } from 'redux-saga/effects';
import moducks from './moducks';
import { bookshop } from '../utils/apis';
import { setNotice, deleteNotice } from './notice';

const defaultState = {
  cart: [],
  totalAmount: 0,
  totalQty: 0,
};

export const {
  cart, sagas,
  getCart, postCart, 
  addToCart, updateCart, deleteCartItem,
  updateCartFailed,
} = moducks.createModule('cart', {
  GET_CART: {
    saga: function* (action) {
      const cartList = yield call(bookshop.getCart);
      if (typeof cartList === 'object') {
        return updateCart(cartList);
      }
    },
  },
  POST_CART: {
    saga: function* (action) {
      yield call(bookshop.postCart, action.payload);
    },
  },
  ADD_TO_CART: {
    saga: function* ({ payload: { id, num, price } }) {
      const updateItem = { id, price, num };

      const nowCartState = yield select((state) => state.cart );

      const sameItems = nowCartState.cart.filter((elem) => {
        return elem.id === id;
      });
      let sumItemNum = 0;
      if (sameItems.length > 0) {
        sameItems.forEach((elem) => {
          sumItemNum += elem.num;
        });
      }

      const cartItems = nowCartState.cart.filter((elem) => {
        return elem.id !== id;
      });

      const cartContents = [
        ...cartItems,
        { id, price, num: sumItemNum + num },
      ];

      let totalAmount = 0;
      let totalQty = 0;
      cartContents.forEach((elem) => {
        totalAmount = totalAmount + elem.num;
        totalQty = totalQty +  (parseFloat(elem.price) * parseFloat(elem.num));
      });
      const cartData = {
        cart: cartContents,
        totalAmount,
        totalQty,
      };

      const result = yield call(bookshop.postCart, cartData);
      if (result.status === 200) {
        const notice = yield select((state) => state.notice );
        if (notice.status) {
          yield deleteNotice();
        }
        yield setNotice({ status: 'ok', message: `${num} item added to cart!` });
        return updateCart(cartData);
      } else {
        return setNotice({ status: 'critical', message: 'Add cart failed!' });
      }
    },
  },
  UPDATE_CART: {
    reducer: (state, { payload: { cart, totalAmount, totalQty } }) => ({ ...state, cart, totalAmount, totalQty  }),
  },
  DELETE_CART_ITEM: {
    reducer: state => ({ ...defaultState }),
  },
  UPDATE_CART_FAILED: {
    saga: function* (action) {
      console.log("update cart failed!!");
    },
  },
}, defaultState);
