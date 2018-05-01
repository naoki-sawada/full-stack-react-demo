import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const router = Router();

export default router
  .post('/', bodyParser(), async (ctx) => {
    const result = ctx;
    const cart = ctx.request.body;
    const { session } = ctx;
    console.log(session);
    session.cart = cart;
    session.save((err) => {
      if(err){
        throw err;
      }
      result.body = req.session.cart;
    });
  })
  .get('/', bodyParser(), async (ctx) => {
    console.log(ctx)
    const result = ctx;
    const { session } = ctx;
    if (session) {
      result.body = session;
    } else {
      // TODO: Error handling
      result.body = { state: 'error' };
    }
  });