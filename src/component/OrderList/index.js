import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getOrder, delieryOrder } from '../../redux/thunk/orderThunk'
import './style.css'


class OrderList extends Component {
    componentDidMount() {
        this.props.getOrder()
    }

    deliveryOrderHof = (id) => () => {
        this.props.delieryOrder(id)
    }

    render() {
        const { orders } = this.props
        return (
            <div className="order-list-container">
                <div className="title-contaner"> Список заказов </div>
                { orders.map(item => (
                    <div className="order-card" >
                        <div className="order-title" >№ {item._id}</div>
                        <div className="addres-block" >
                            <div className="label">
                                Адрес:
                            </div>
                            <div className="addres-value">
                                {item.adress}
                            </div>
                        </div>
                        { item.products.map(product => (
                            <div className="product-item">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-weight">
                                    {product.weight}г
                                </div>
                            </div>
                        )) }
                        <div className="total-price-container">
                            <div className="total-price-label">
                                Общая сумма:
                            </div>
                            <div className="total-price-value">
                                {item.totalPrice}<span>$</span>
                            </div>
                        </div>
                        <div className="button-container">
                            { item.status !== 'delivery' &&  
                                <button className="button" onClick={this.deliveryOrderHof(item._id)}>Доставить заказ</button> 
                            }
                            <button className="button">Отменить заказ</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.order.orders,
})

const mapDispatchToProps = dispatch => ({
    getOrder: bindActionCreators(getOrder, dispatch),
    delieryOrder: bindActionCreators(delieryOrder, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)