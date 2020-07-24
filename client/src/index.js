import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import TestHook from './testHook'
import { Provider } from 'react-redux';
import store from './store';
import { Button } from 'antd';

ReactDOM.render(
    <Provider store={store}>
      <TestHook/>
    </Provider>,
  document.getElementById('root')
);

//<App />