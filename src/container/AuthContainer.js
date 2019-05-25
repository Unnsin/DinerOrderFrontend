import React, { Component } from 'react';
import { connect } from 'react-redux'
import {login, register} from '../redux/thunk/authThunk'
import { bindActionCreators } from 'redux'
import RegisterFrom from '../component/RegisterForm';
import LoginForm from '../component/LoginForm';
import './authContainerStyle.css'

class AuthContainer extends Component {
  render() {
    const {
      login,
      register
    } = this.props

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
          <LoginForm login={login}/>
          <RegisterFrom register={register}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})
const mapPropsToDispatch = (dispatch) => ({
  login: bindActionCreators(login, dispatch),
  register: bindActionCreators(register, dispatch)
})

export default connect(mapStateToProps, mapPropsToDispatch)(AuthContainer);
