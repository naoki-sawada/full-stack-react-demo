import mongoose from 'mongoose';

const booksSchema = mongoose.Schema({
  title: String,
  description: String,
  images: String,
  price: Number,
});

const Books = mongoose.model('Books', booksSchema);

// export default Books;
export default mongoose.model('Books');
