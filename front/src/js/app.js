import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createStore from '~/store';

import BooksList from './components/pages/Booklist';
import Cart from './components/pages/Cart';
import BooksForm from './components/pages/BooksForm';

import Menu from './components/menu';
import Footer from './components/footer';

const store = createStore({});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
      <Menu />
      <Switch>
          <Route exact path="/" component={BooksList}/>
          <Route path="/admin" component={BooksForm}/>
          <Route path="/cart" component={Cart}/>
      </Switch>
      <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main'),
);
