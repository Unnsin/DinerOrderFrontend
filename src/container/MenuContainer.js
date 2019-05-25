import React, { Component } from 'react'
import ProductList from '../component/ProductList/index'
import './mainContainerStyle.css'

class MenuContainer extends Component {
    render() {
        return (
            <div className="menu-container">
                <ProductList />
            </div>
        )
    }
}

export default MenuContainer