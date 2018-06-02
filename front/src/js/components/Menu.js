import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import styles from './Menu.css';

// @CSSModules(styles)
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Title>
          Sample Title
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
        </Box>
      </Header>
    );
  }
}
