import moducks from './modules/moducks';
import { sagas as cart } from '~/modules/cart';
import { sagas as books } from '~/modules/books';

export default  moducks.util.flattenSagas({
  cart,
  books,
});