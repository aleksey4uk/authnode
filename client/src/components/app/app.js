import React from 'react';
import {Switch, Route, useParams} from 'react-router-dom';
import AuthPage from '../pages/authPage';
import {ErrorPage} from '../pages/errorPage';
import HomePage from '../pages/homePage';
import AddNews from '../add-news'
import DetailNews from '../detail-news';

import 'antd/dist/antd.css';
import './app.css';

function App(props) {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={AuthPage}/>
          <Route path='/home' exact component={HomePage} />
          <Route path='/home/:id' exact>
            <HomePage/>
          </Route> 
          <Route path='/news' component={AddNews}/>
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
