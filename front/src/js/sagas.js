import moducks from './modules/moducks';
import { sagas as cart } from '~/modules/cart';
import { sagas as books } from '~/modules/books';
import { sagas as notice } from '~/modules/notice';

export default moducks.util.flattenSagas({
  cart,
  books,
  notice,
});