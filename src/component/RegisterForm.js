import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from './Input'
import * as _ from 'lodash'
import './formStyle.css'

class RegisteFrom extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            name: "",
            lname: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

    onChange = (payload) => {
        this.setState({[payload.name]: payload.value})
    }

    onChangeNameInput = (payload) => {
        const nameArr = payload.value.split(" ") 
        this.setState({ name: nameArr[0], lname: nameArr[1] })
    }

    register = (e) =>  {
        e.preventDefault()
        const { password, confirmPassword } = this.state
        if(password === confirmPassword) {
            const user = { ...this.state }
            _.unset(user, 'confirmPassword')
            _.set(user, 'role', 1)
            this.props.register(user)
        }
    }

    render() {
        const { error, errorType } = this.props
        return (
            <div>
                <div className="form-div">
                    { 
                        errorType === "register" && (
                            <div className="error-message">
                                {error}
                            </div>
                        ) 
                    }
                    <form>
                        <Input 
                            label="Логин"
                            type="text"
                            name="login"
                            onChange={this.onChange}
                        />
                        <Input 
                            label="Имя и Фамилия"
                            type="text"
                            name="nameAndLname"
                            onChange={this.onChangeNameInput}
                        />
                        <Input 
                            label="Телефон"
                            type="phone"
                            name="phone"
                            onChange={this.onChange}
                        />
                        <Input
                            label="Emai"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                        />
                        <Input 
                            label="Пароль"
                            type="password"
                            name="password"
                            onChange={this.onChange}
                        />
                        <Input 
                            label="Подтвердите пароль"
                            type="password"
                            name="confirmPassword"
                            onChange={this.onChange}
                        />
                        <div className="button-container">
                            <button className="button" onClick={this.register}>Регистрация</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.app.error,
    errorType: state.app.errorType,
}) 

export default connect(mapStateToProps)(RegisteFrom);
