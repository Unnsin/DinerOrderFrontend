import React, { Component } from 'react'
import './InputStyle.css'

class Input extends Component {
    onChange = (e) => {
        const { onChange, type } = this.props
        onChange({ 
            name: e.target.name, 
            value: type !== "file" ? e.target.value : e.target.files
        })
    }

    render() {
        const { label, type,  placeholder, name } = this.props
        return (
            <div className="input-block">
                <label className="label">{ label }</label>
                <input 
                    className="input"
                    name={name} 
                    placeholder={placeholder}
                    type={type || 'text'} 
                    onChange={this.onChange} 
                />
            </div>
        )
    }
}

export default Input