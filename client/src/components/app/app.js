import React from 'react';
import AuthPage from '../pages/authPage';
import { CreateNews } from '../pages/createNews';
import {Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import './app.css';

function App(props) {
  return (
    <div className="App">
      <Switch>
          <Route path='/news' component={CreateNews}/>
          <Route path='/' component={AuthPage}/>
      </Switch>
    </div>
  );
}

export default App;
