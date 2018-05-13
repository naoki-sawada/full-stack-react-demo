import styles from './Footer.css';

@CSSModules(styles)
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer styleName="footer">
        <div styleName="container">
          <p styleName="footerText">Copyright 2017 BooksShop. All rights reserved</p>
        </div>
      </footer>
    );
  }
}
