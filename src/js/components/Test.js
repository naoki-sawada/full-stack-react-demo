import { connect } from 'react-redux';
import styles from './Test.css';
import { testIncrement, testDecrement, testClear } from '~/modules/test';

@connect(state => ({
  count: state.test.counter,
}), {
  testIncrement,
  testDecrement,
  testClear,
})
@CSSModules(styles)
export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="test">
        <div styleName="count">{this.props.count}</div>
        <div styleName="button">
          <button onClick={this.props.testDecrement}>DECREMENT</button>
          <button onClick={this.props.testIncrement}>INCREMENT</button>
          <button onClick={this.props.testClear}>CLEAR</button>
        </div>
      </div>
    );
  }
}
