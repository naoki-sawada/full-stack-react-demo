import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import Books from '../models/books';

const router = Router();

export default router
  .post('/', bodyParser(), async (ctx) => {
    const book = ctx.request.body;
    const newBooks = new Books(book);
    const savedBooks = await newBooks.save();
    ctx.body = savedBooks;
  })
  .get('/', bodyParser(), async (ctx) => {
    const books = await Books.find({});
    ctx.body = books;
  })
  .delete('/:_id', bodyParser(), async (ctx) => {
    const id = ctx.params._id;
    const book = await Books.findById(id);
    const deletedBook = await book.remove();
    ctx.body = deletedBook;
  })
  .put('/:_id', bodyParser(), async (ctx) => {
    const book = ctx.request.body;
    const id = ctx.params._id;
    const updatedBook = await Books.findByIdAndUpdate(id, book);
    ctx.body = updatedBook;
  });
