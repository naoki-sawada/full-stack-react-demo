import Koa from 'koa';
import cors from '@koa/cors';
import mongoose from 'mongoose';
import redisStore from 'koa-redis';
import session from 'koa-session';
import config from 'config';
import router from './src/routes';

mongoose.connect(config.mongo.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error: '));

const app = new Koa();

app.keys = config.app.keys;
app.proxy = true;

app.use(session({
  store: redisStore({
    // options
  }),
}, app));
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 3001);
}

export default app;