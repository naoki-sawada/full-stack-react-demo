import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const router = Router();

export default router
  .get('/', bodyParser(), async (ctx) => {
    const result = ctx;
    result.body = { status: 'ok' };
  });