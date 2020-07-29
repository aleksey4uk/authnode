import React from 'react';
import {Switch, Route, useParams} from 'react-router-dom';
import AuthPage from '../pages/auth-page';
import {ErrorPage} from '../pages/error-page';
import HomePage from '../pages/home-page';
import AddNews from '../add-news'
import DetailNews from '../detail-news';
import DetailPage from '../pages/detail-page';

import 'antd/dist/antd.css';
import './app.css';

function App(props) {
  return (
    <div className="App">
      <Switch>
          <Route path='/' exact component={AuthPage}/>
          <Route path='/home' exact component={HomePage} />
          <Route path='/home/:id'>
            <DetailPage/>
          </Route> 
          <Route path='/news' component={AddNews}/>
          <Route component={ErrorPage}/>
        </Switch>
    </div>
  );
}

export default App;
