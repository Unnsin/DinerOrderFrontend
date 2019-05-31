import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProducts, deleteProduct } from '../../redux/thunk/productThunk'
import { addToBusket } from '../../redux/thunk/busketThunk'
import './style.css'

class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    deleteProductHof = (id) => () => {
        this.props.deleteProducts(id)
        window.location.reload()
    }

    onClick = (id) => () => {
        const userId = localStorage.getItem('userId')
        this.props.addToBusket(userId, id)
    }

    render() {
        const { products, user, isAuth } = this.props
        return (
            <div className="product-list-container">
                { products.map(product => (
                    <div className="product-card" key={product._id}>
                        <img  className="product-card-img" src={product.image} alt={product.name} />
                        <div className="product-card-name">{product.name}</div>
                        <div className="product-card-weight">{product.weight} г.</div>
                        <div className="price-and-add-container">
                            <div className="product-card-price">{product.price}<span>$</span></div>
                            {isAuth && user.role == 2 && <button className="product-remove-button" onClick={this.deleteProductHof(product._id)}>Удалить</button>}
                            <button className="product-add-to-busket-button" onClick={this.onClick(product._id)}>Заказать</button>
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
    user: state.user.user,
    isAuth: state.app.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
    getProducts: bindActionCreators(getProducts, dispatch),
    addToBusket: bindActionCreators(addToBusket, dispatch),
    deleteProducts: bindActionCreators(deleteProduct, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)