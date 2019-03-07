// This is fairly standard base boilerplate code for a react/redux app.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
   // when createStore is called, all the reducers are passed in as arguments
   <Provider store={createStore(reducers)}>
      <App />
   </Provider>,
   document.querySelector('#root'));