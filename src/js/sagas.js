import { flattenSagas } from 'moducks';
import { sagas as test } from '~/modules/test';

export default flattenSagas({
  test,
});