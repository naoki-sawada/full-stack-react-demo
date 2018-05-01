import { flattenSagas } from 'moducks';
import { sagas as test } from '~/modules/test';
import { sagas as cart } from '~/modules/cart';
import { sagas as books } from '~/modules/books';

export default flattenSagas({
  test,
  cart,
  books,
});