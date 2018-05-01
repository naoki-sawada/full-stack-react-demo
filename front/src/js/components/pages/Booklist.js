import { connect } from 'react-redux';
import styles from './BookList.css';
import { getBooks } from '~/modules/books';

@connect(state => ({
  books: state.books.books,
}), {
  getBooks,
})
@CSSModules(styles)
export default class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getBooks();
  }

  render() {
    const bookList = [];
    this.props.books.forEach((elem, index) => {
      const { title, description, images, price } = elem;
      bookList.push(
        <div key={index}>
          <h1>Title: {title}</h1>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <img src={images[0]}/>
        </div>
      );
    });

    return (
      <div styleName="bookList">
        {bookList}
      </div>
    );
  }
}
