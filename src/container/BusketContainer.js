import React, { Component } from 'react'
import BusketList from '../component/BusketList/index'
import OrderForm from '../component/OrderForm/index'
import './mainContainerStyle.css'

class BusketContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOrderFormActive: false,
        }
    }

    setFormView = (value) => () => this.setState({ isOrderFormActive: value })

    render() {
        const { isOrderFormActive } = this.state
        return (
            <div className="busket-main-container" >
                { isOrderFormActive && <OrderForm setView={this.setFormView} />} 
                { !isOrderFormActive && <BusketList setView={this.setFormView} />}
            </div>
        )
    }
}

export default BusketContainer
