import React, { Component } from 'react'
import './InputStyle.css'

class Input extends Component {
    render() {
        const { label, type, onChange, placeholder } = this.props
        return (
            <div className="input-block">
                <label className="label">{ label }</label>
                <input 
                    className="input"
                    name="input" 
                    placeholder={placeholder}
                    type={type || 'text'} 
                    onChange={onChange} 
                />
            </div>
        )
    }
}

export default Input