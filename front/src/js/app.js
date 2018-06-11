import '../scss/index.scss';
import Box from 'grommet/components/Box';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createStore from '~/store';

import BooksList from './components/pages/Booklist';
import Cart from './components/pages/Cart';
import BooksForm from './components/pages/BooksForm';

import Notice from './components/Notice';
import Menu from './components/Menu';
import SiteFooter from './components/SiteFooter';

const store = createStore({});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Box pad='medium'>
        <Notice />
        <Menu />
        <Switch>
            <Route exact path="/" component={BooksList}/>
            <Route path="/admin" component={BooksForm}/>
            <Route path="/cart" component={Cart}/>
        </Switch>
        <SiteFooter />
      </Box>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main'),
);
