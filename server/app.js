import Koa from 'koa';
import cors from '@koa/cors';
import mongoose from 'mongoose';
import MongooseStore from 'koa-session-mongoose';
import session from 'koa-session';
import config from 'config';
import router from './src/routes';

mongoose.connect(config.mongo.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error: '));

const app = new Koa();

app.keys = config.app.keys;
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(session({
  // store: MongooseStore.create(),
}, app));

app.use(async (ctx) => {
  const { session } = ctx;
  // console.log('=================', session);
  let n = session.views || 0;
  session.views = ++n;
  ctx.body = `${n} view(s)`;
});

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 3001);
}

export default app;