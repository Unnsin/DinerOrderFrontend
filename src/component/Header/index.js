import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './style.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonState: false
        }
    }

    historyPush = (param) => () => {
        this.setState({buttonState: !this.state.buttonState})
        this.props.history.push(param)
    }

    render() {
        const { buttonState } = this.state
        return (
            <div className="header">
                <Link  className="link" to="/">
                    <h3>EasyToEat</h3>
                </Link>
                <div className="wrapper">
                    <button 
                        id="check-menu" 
                        onClick={() => this.setState({buttonState: !buttonState })} 
                        className={buttonState ? 'checked': ''}  
                    />
                    <label className="check-label" htmlFor="check-menu"></label>
                    <div className="burger-line first"></div>
                    <div className="burger-line second"></div>
                    <div className="burger-line third"></div>
                    <div className="burger-line fourth"></div>
                    <nav className="main-menu">
                        <button className="menu-item" onClick={this.historyPush("/auth")}>Автоизация</button>
                        <button className="menu-item" onClick={this.historyPush("/menu")}>Меню</button>
                        <button className="menu-item" onClick={this.historyPush("/personal-area")}>Личный Кабинет</button>
                        <button className="menu-item" onClick={this.historyPush("/order-admin")}>Администрирование</button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)