import { Provider } from 'react-redux';
import createStore from '~/store';
import Main from './components/Main';

const store = createStore({});

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main'),
);
