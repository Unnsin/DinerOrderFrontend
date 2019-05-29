import React, { Component } from 'react'
import Input from '../Input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createOrder } from '../../redux/thunk/orderThunk'
import './style.css'

class OrderForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            adress: '',
        }
    }
    
    onChange = (payload) => {
        this.setState({ [payload.name]: payload.value })
    }

    createOrderFunc = () => {
        const { adress } = this.state
        const { products } = this.props
        const totalPrice = products.reduce((accum, item) => accum + item.price, 0)
        const productIds = products.map(item => item._id)
        this.props.createOrder({ adress, totalPrice, products: productIds })
    }

    render() {
        const { setView, products } = this.props
        const price = products.reduce((accum, item) => accum + item.price, 0)
        return (
            <div>
                <div className="title-order" >Оформление заказа</div>
                <div className="product-list">
                    {
                        products.map(product => (
                        <div className="product-row">
                            <div className="product-label">
                                {product.name}
                            </div>
                            <div className="price-block">
                                {product.price}<span>$</span>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <hr />
                <div className="total-price-container">
                    <div className="total-label">
                        Общая цена:
                    </div>
                    <div className="price-block">
                        { price }<span>$</span>
                    </div>
                </div>
                <form>
                    <Input 
                        label="Адрес доставки"
                        name="adress"
                        type="text"
                        onChange={this.onChange}
                    />
                </form>
                <div className="button-container">
                    <button className="button mr-10" onClick={setView(false)}>Вернуться к корзине</button>
                    <button className="button" onClick={this.createOrderFunc}>Оформить заказ</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.busket.busket.products,
})

const mapDispatchToProps = (dispatch) => ({
    createOrder: bindActionCreators(createOrder, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)