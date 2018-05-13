import Router from 'koa-router';
import cookie from 'koa-cookie';
import cart from './cart';
import images from './images';
import books from './books';

const router = new Router();

// router.prefix('/api');
router.use(cookie());
router.use('/cart', cart.routes(), cart.allowedMethods());
router.use('/images', images.routes(), images.allowedMethods());
router.use('/books', books.routes(), books.allowedMethods());
router.get('/', async (ctx) => {
  ctx.body = 'running';
});

export default router;
