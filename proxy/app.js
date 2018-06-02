import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import proxy from 'koa-proxy';
import fs from 'fs';
import util from 'util'; 
import config from 'config'; 

const filePath = `${__dirname}/../front/www`;

const readFile = util.promisify(fs.readFile);

const api = new Koa();
api.use(proxy({
  host: config.proxy.host,
}));

const router = new Router();
router.get('*', async (ctx) => {
  ctx.body = await readFile(`${filePath}/index.html`, 'utf-8');
});

const app = new Koa();

app.use(serve(filePath));
app.use(mount('/api', api));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);