import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const router = Router();

export default router
  .post('/', bodyParser(), async (ctx) => {
    const cart = ctx.request.body;
    const { session } = ctx;
    session.cart = cart;
    ctx.body = session.cart;
  })
  .get('/', bodyParser(), async (ctx) => {
    console.log(ctx);
    const { session } = ctx;
    if (typeof session.cart !== 'undefined') {
      ctx.body = session.cart;
    }
  });