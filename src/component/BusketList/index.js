import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFromBusket } from '../../redux/thunk/busketThunk'
import { getBusketById } from '../../redux/thunk/busketThunk'
import './style.css'

class ProductList extends Component {

    componentDidMount() {
        const userId = localStorage.getItem('userId')
        this.props.getBusketById(userId)
    }

    removeFromBusket = (productId) => () => {
        const userId = localStorage.getItem('userId')
        this.props.removeFromBusket(userId, productId)
        this.props.getBusketById(userId)
    }

    render() {
        const { products, loaded, setView } = this.props
        return (
            <div className="product-list-container">
                { loaded && products.map(product => (
                    <div className="product-card" key={product._id}>
                        <img  className="product-card-img" src={product.image} alt={product.name} />
                        <div className="product-card-name">{product.name}</div>
                        <div className="product-card-weight">{product.weight} г.</div>
                        <div className="price-and-add-container">
                            <div className="product-card-price">{product.price}<span>$</span></div>
                            <button className="product-add-to-busket-button" onClick={this.removeFromBusket(product._id)}>Удалить</button>
                        </div>
                    </div>
                )) }
                <button className="button" onClick={setView(true)}>Офомить заказ</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.busket.busket.products,
    loaded: state.busket.getBusketById.loaded,
})

const mapDispatchToProps = (dispatch) => ({
    removeFromBusket: bindActionCreators(removeFromBusket, dispatch),
    getBusketById: bindActionCreators(getBusketById, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)