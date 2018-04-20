import styles from './Main.css';
import Test from './Test';

@CSSModules(styles)
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="main">
        <Test />
      </div>
    );
  }
}
