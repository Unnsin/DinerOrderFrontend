import React, { Component } from 'react';
import RegisterFrom from '../component/RegisterForm';
import LoginForm from '../component/LoginForm';
import './authContainerStyle.css'

class AuthContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <hr style={{ width: '10%' }}  />
          Авторизация
          <hr style={{ width: '30%' }}  />
          Регистрация
          <hr style={{ width: '12%' }} />
        </div>
        <div className="form-container space-between">
          <LoginForm />
          <RegisterFrom />
        </div>
      </div>
    );
  }
}

export default AuthContainer;
