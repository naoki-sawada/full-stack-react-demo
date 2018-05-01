import styles from './Menu.css';

@CSSModules(styles)
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="menu">
        menu dayo
      </div>
    );
  }
}
