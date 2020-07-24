import React from 'react';
import AuthPage from '../pages/authPage';
import {Switch} from 'react-router-dom';
import { Card } from 'antd';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './app.css'

function App(props) {
  return (
    <div className="App">
          <AuthPage/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
} 

export default connect(mapStateToProps)(App);
