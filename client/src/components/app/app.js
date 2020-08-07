import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from '../pages/auth-page';
import {ErrorPage} from '../pages/error-page';
import HomePage from '../pages/home-page';
//import { Chat } from '../pages/chat-page';
import AddNews from '../add-news'
import DetailPage from '../pages/detail-page';
import {getToken} from '../../utils/utils.js';

import 'antd/dist/antd.css';
import './app.css';

function App() {
  const token = getToken();
  if(!token) return <Redirect to="/" /> 

  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={AuthPage}/>
          <Route path='/home' exact component={HomePage} />
          <Route path='/home/:id'>
            <DetailPage/>
          </Route> 
          <Route path="/chat">
            <HomePage chat/>
          </Route>
          <Route path="/lk">
            <HomePage account />
          </Route>    
          <Route path='/news' component={AddNews}/>
          <Route component={ErrorPage}/>
          
        </Switch>
    </div>
  );
}

export default App;

