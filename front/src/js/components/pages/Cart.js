import { connect } from 'react-redux';
import styles from './Cart.css';
import { getCart, postCart } from '~/modules/cart';

@connect(state => ({
  cart: state.cart.cart,
}), {
  getCart,
  postCart,
})
@CSSModules(styles)
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
        cart
        <button onClick={(e) => { this.props.postCart(postData) }}>test</button>
        <button onClick={(e) => { this.props.getCart() }}>get test</button>
      </div>
    );
  }
}
