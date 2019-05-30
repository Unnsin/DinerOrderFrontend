import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadProduct, createProduct } from '../../redux/thunk/productThunk'
import Input from '../Input'
import './style.css'

class CreateProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            weight: '',
            price: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { name, image, weight, price } = this.state
        this.props.createProduct({
            name,
            image,
            weight: Number(weight),
            price: Number(price)
        })
    }

    onChange = (payload) => {
        this.setState({ [payload.name]: payload.value })
    }

    onChangeFile = (payload) => {
        this.props.uploadFile(Array.from(payload.value)[0])
    }

    render() {
        return (
            <div className="create-product-container" >
                <div className="title">Форма создания нового продукта</div>
                <div className="form-container">
                    <form>
                        <Input 
                            label="Название"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                        />
                        <Input 
                            label="Фотография"
                            type="text"
                            name="image"
                            onChange={this.onChange}
                        />
                        <Input 
                            label="Вес"
                            type="text"
                            name="weight"
                            onChange={this.onChange}
                        />
                        <Input 
                            label="Цена"
                            type="text"
                            name="price"
                            onChange={this.onChange}
                        />
                        <div className="button-container">
                            <button className="button" onClick={this.onSubmit}>Создать продукт</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    uploadFile: bindActionCreators(uploadProduct, dispatch),
    createProduct: bindActionCreators(createProduct, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductForm)