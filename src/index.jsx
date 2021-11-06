import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stores from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
