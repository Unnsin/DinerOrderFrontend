import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProducts } from '../../redux/thunk/productThunk'
import './style.css'

class ProductList extends Component {
    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const { products } = this.props
        return (
            <div className="product-list-container">
                { products.map(product => (
                    <div className="product-card" key={product._id}>
                        <img  className="product-card-img" src={product.image} alt={product.name} />
                        <div className="product-card-name">{product.name}</div>
                        <div className="product-card-weight">{product.weight} г.</div>
                        <div className="price-and-add-container">
                            <div className="product-card-price">{product.price}<span>$</span></div>
                            <button className="product-add-to-busket-button">Заказать</button>
                        </div>
                    </div>
                )) }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.product.products,
    loading: state.product.getProducts.loading,
    error: state.product.getProducts.error,
    loaded: state.product.getProducts.loaded,
})

const mapDispatchToProps = (dispatch) => ({
    getProducts: bindActionCreators(getProducts, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)