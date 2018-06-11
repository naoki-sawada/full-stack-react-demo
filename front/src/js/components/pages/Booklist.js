import Columns from 'grommet/components/Columns';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import NumberInput from 'grommet/components/NumberInput';
import { connect } from 'react-redux';
import { getBooks } from '~/modules/books';
import { addToCart, getCart, postCart } from '~/modules/cart';

@connect(state => ({
  books: state.books.books,
  cart: state.cart.cart,
}), {
  addToCart,
  getBooks,
  getCart,
  postCart,
})
export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addCart = this.addCart.bind(this);
    this.numInput = this.numInput.bind(this);
  }

  componentDidMount(){
    this.props.getCart();
    this.props.getBooks();
  }

  numInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  addCart(event, price) {
    if (event.target.id && price) {
      const num = parseInt(this.state[event.target.id], 10);
      if (num > 0) {
        this.props.addToCart({ id: event.target.id, num, price });
      }
    }
  }

  render() {
    const bookList = [];
    this.props.books.forEach((elem, index) => {
      const { title, description, images, price, _id } = elem;
      bookList.push(
        <Box
          pad="medium" >
          {/* <Image src={images} /> */}
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{`¥${price}`}</p>
          <hr />
          <NumberInput
            id={_id}
            onChange={this.numInput}
            min={0} />
          <br />
          <Button
            id={_id}
            label="Add"
            primary={true}
            onClick={(e) => { this.addCart(e, price) }} />
        </Box>
      );
    });

    return (
      <Columns>
        {bookList}
      </Columns>
    );
  }
}
