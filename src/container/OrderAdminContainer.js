import React, { Component } from 'react'
import OrderList from '../component/OrderList/index'

class OrderAdminContainer extends Component {
    render() {
        return (
            <div className="order-admin-container" >
                <OrderList />
            </div>
        )
    }
}

export default OrderAdminContainer
