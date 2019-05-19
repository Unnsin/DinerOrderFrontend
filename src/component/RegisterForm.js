import React, { Component } from 'react';
import Input from './Input'
import './formStyle.css'

class RegisteFrom extends Component {

    render() {
        return (
            <div>
                <form>
                    <Input 
                        label="Логин"
                        type="text"
                        onChange={()=> {}}
                    />
                    <Input 
                        label="Имя и Фамилия"
                        type="text"
                        onChange={()=> {}}
                    />
                    <Input 
                        label="Телефон"
                        type="phone"
                        onChange={()=>{}}
                    />
                    <Input
                        label="Emai"
                        type="email"
                        onChange={() => {}}
                    />
                    <Input 
                        label="Пароль"
                        type="password"
                        onChange={() => {}}
                    />
                    <Input 
                        label="Подтвердите пароль"
                        type="password"
                        onChange={() => {}}
                    />
                    <div className="button-container">
                        <button className="button">Регистрация</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisteFrom;
