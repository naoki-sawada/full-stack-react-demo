import styles from './Footer.css';

@CSSModules(styles)
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="footer">
        footer dayo
      </div>
    );
  }
}
