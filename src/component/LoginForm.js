import React, { Component } from 'react';
import Input from './Input'
import './formStyle.css'

class LoginForm extends Component {

    render() {
        return (
            <div className="form-container">
                <form>
                    <Input 
                        label="Логин"
                        type="text"
                        onChange={() => {}} 
                    />
                    <Input 
                        label="Пароль"
                        type="password"
                        onChange={() => {}}
                    />
                    <div className="button-container">
                        <button className="button">Авторизация</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;
