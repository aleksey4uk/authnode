import React from 'react';
import AuthForm from '../form/form';
import { Redirect } from 'react-router-dom';

const AuthPage = () => {
  const token = localStorage.getItem('loginStorage');

  if (token) return <Redirect to="/home" />
  return (
    <div className="auth-page container">
      <AuthForm/>
    </div>
  )
}

export default AuthPage;