import Button from 'grommet/components/Button';
import { connect } from 'react-redux';
import { getCart, postCart } from '~/modules/cart';

@connect(state => ({
  cart: state.cart.cart,
}), {
  getCart,
  postCart,
})
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCart();
  }

  updateCart() {
  }

  render() {
    const postData = {
      cart: { book: 'aaaaaa' },
      totalAmount: 2,
      totalQty: 1000,
    };
    console.log(this.props.cart);
    return (
      <div styleName="cart">
        <Button
          label="Post Cart"
          onClick={(e) => { this.props.postCart(postData) }}
          primary={true} />
        <Button
          label="Get Cart"
          onClick={(e) => { this.props.getCart() }}
          primary={true} />
      </div>
    );
  }
}
