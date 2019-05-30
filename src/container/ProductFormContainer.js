import React, { Component } from 'react'
import CreateProductForm from '../component/CreateProductForm/index'
import './mainContainerStyle.css'

class ProductFormContainer  extends Component {
    render() {
        return (
            <div className="product-form-container">
                <CreateProductForm />
            </div>
        )
    }
}

export default ProductFormContainer