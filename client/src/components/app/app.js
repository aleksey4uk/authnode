import React from 'react';
import AuthPage from '../pages/authPage';
import {ErrorPage} from '../pages/errorPage';
import {Switch, Route, Redirect} from 'react-router-dom';
import { HomePage } from '../pages/homePage';
import 'antd/dist/antd.css';
import './app.css';

function App(props) {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={AuthPage}/>
          <Route path='/home' component={HomePage} />
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
