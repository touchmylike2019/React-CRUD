import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
class FormInput extends Component{
    state = {}
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }, () => {
            this.props.onFormChange(this.state) //Callback fix async because setState is async
        })
    }
    render(){
        const { label, name, value } = this.props
        return(
            <FormGroup>
                <Label>{ label }</Label>
                <Input 
                    required
                    type="text" 
                    name={ name } 
                    value={value}
                    placeholder={ label } 
                    onChange={ this.handleChange }
                />
            </FormGroup>
        )
    }
}

export default FormInput