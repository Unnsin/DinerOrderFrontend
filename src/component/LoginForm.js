import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from './Input'
import './formStyle.css'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    
    onChange = (payload) => {
        this.setState({[payload.name]: payload.value})
    }

    login = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        this.props.login(email, password)
    }

    render() {
        const { error, errorType } = this.props
        return (
            <div className="form-container">
                <div className="form-div">
                    { 
                        errorType === "login" && (
                            <div className="error-message">
                                {error}
                            </div>
                        ) 
                    }
                    <form>
                        <Input 
                            label="Email"
                            type="text"
                            name="email"
                            onChange={this.onChange} 
                        />
                        <Input 
                            label="Пароль"
                            name="password"
                            type="password"
                            onChange={this.onChange}
                        />
                        <div className="button-container">
                            <button className="button" onClick={this.login}>Авторизация</button>
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

export default connect(mapStateToProps)(LoginForm);
