import './FormInput.css'
import React, { Component } from 'react'

export default class FormInput extends Component {

    constructor(props){
        super(props);
        this.state={
            focused:false,
        }
    }

  render() {

    const { value, label, onChange , id, ...inputProps } = this.props;



    const handleFocus = (e) => {
            e.preventDefault()
                this.setState({
                    focused:true,
                })
    }



    return (
        <div className='formInput'>
            <label htmlFor="">{label}</label>
            <input {...inputProps} onChange={onChange} value={value} onBlur={handleFocus} 
                focused={this.state.focused.toString()}
            />
            <span>{this.props.errormessage}</span>
        </div>
    )
  }
}
