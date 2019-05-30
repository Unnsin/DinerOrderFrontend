import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isAuthAction } from '../../redux/thunk/appThunk'
import { getBusketById } from '../../redux/thunk/busketThunk'
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

    componentDidMount() {
        this.props.isAuthAction()
        const userId = localStorage.getItem('userId')
        this.props.getBusketById(userId)
    }

    historyPush = (param) => () => {
        this.setState({buttonState: !this.state.buttonState})
        this.props.history.push(param)
    }

    signOut = () => {
        localStorage.removeItem('token');
        this.setState({buttonState: !this.state.buttonState});
        this.props.isAuthAction()
    }

    render() {
        const { buttonState } = this.state
        const { isAuth } = this.props
        return (
            <div className="header">
                <Link  className="link" to="/">
                    <h3>EasyToEat</h3>
                </Link>
                <div className="wrapper">
                    { isAuth && (
                        <div className="auth-label">
                            Authenticated
                        </div>
                    ) 
                    }
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
                        {isAuth && (<button className="menu-item" onClick={this.historyPush("/busket")}>Корзина</button>)}
                        <button className="menu-item" onClick={this.historyPush("/personal-area")}>Личный Кабинет</button>
                        <button className="menu-item" onClick={this.historyPush("/order-admin")}>Администрирование</button>
                        <button className="menu-item" onClick={this.historyPush('/product-form-container')}>Добавить продукт</button>
                        {isAuth && (<button className="menu-item" onClick={this.signOut}>Выйти</button>)}
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.app.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
    isAuthAction: bindActionCreators(isAuthAction, dispatch),
    getBusketById: bindActionCreators(getBusketById, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))