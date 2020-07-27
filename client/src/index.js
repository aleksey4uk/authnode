import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { Switch } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

//<App />