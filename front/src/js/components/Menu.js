import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Title>
          Book Shop
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
        </Box>
        <Menu direction='row'
          size='small'
          dropAlign={{"right": "right"}}>
          <Anchor href='/'>
            <i class="material-icons">home</i>
          </Anchor>
          <Anchor href='/cart'>
            <i class="material-icons">shopping_cart</i>
          </Anchor>
        </Menu>
      </Header>
    );
  }
}
