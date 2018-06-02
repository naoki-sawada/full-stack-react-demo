import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import styles from './SiteFooter.css';

@CSSModules(styles)
export default class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <footer styleName="footer">
      //   <div styleName="container">
      //     <p styleName="footerText">Copyright 2017 BooksShop. All rights reserved</p>
      //   </div>
      // </footer>
      <Footer justify='between'>
      <Title>
        BookShop
      </Title>
      <Box direction='row'
        align='center'
        pad={{"between": "medium"}}>
        <Paragraph margin='none'>
          © 2018 bookshop
        </Paragraph>
        <Menu direction='row'
          size='small'
          dropAlign={{"right": "right"}}>
          <Anchor href='#'>
            Support
          </Anchor>
          <Anchor href='#'>
            Contact
          </Anchor>
          <Anchor href='#'>
            About
          </Anchor>
        </Menu>
      </Box>
      </Footer>
    );
  }
}
