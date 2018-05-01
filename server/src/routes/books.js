import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import Books from '../models/books';

const router = Router();

export default router
  .post('/', bodyParser(), async (ctx) => {
    const book = ctx.request.body;
    const result = ctx;

    Books.create(book, (err, books) => {
      if (err) {
        throw err;
      }
      result.body = books;
    });
  })
  .get('/', bodyParser(), async (ctx) => {
    Books.find((err, books) => {
      if (err) {
        throw err;
      }
      result.body = books;
    });
  })
  .delete('/:_id', bodyParser(), async (ctx) => {
    const query = { _id: ctx.request.params._id };

    Books.remove(query, (err, books) => {
      if(err) {
        console.log("# API DELETE BOOKS: ", err);
      }
      result.body = books;
    });
  })
  .put('/:_id', bodyParser(), async (ctx) => {
    const book = ctx.request.body;
    const query = ctx.request.params._id;

    const update = {
      '$set':{
        title:book.title,
        description:book.description,
        image:book.image,
        price:book.price
      }
    };
    const options = { new: true };

    console.log(update, options);

    // Books.findOneAndUpdate(query, update, options, (err, books) => {
    //   if (err) {
    //     throw err;
    //   }
    //   rresult.body = books;
    // });
  });
