import React, { Component } from 'react'
import { Form, Button } from 'reactstrap'
import FormInput from './FormInput'

class FormMain extends Component{
    initialState = {
        firstName: '',
        lastName: '',
        age: ''
    }
    state = this.initialState
    onFormChange = field => {
        const key = Object.keys(field)
        const value = field[key]
        this.setState({
            [key]: value
        })
    }
    onSubmitForm = e => {
        e.preventDefault()
        this.props.handleForm(this.state)
        this.setState(this.initialState)
    }
    render(){   
        const {firstName, lastName, age} = this.state
        return(
            <Form onSubmit={ this.onSubmitForm }>
                <h2>Add Member</h2>
                <FormInput 
                    label='First Name' 
                    name='firstName'
                    value={firstName}
                    onFormChange={this.onFormChange}
                />
                <FormInput 
                    label='Last Name' 
                    name='lastName'
                    value={lastName}
                    onFormChange={this.onFormChange}
                />
                <FormInput 
                    label='Age'
                    name='age'
                    value={age}
                    onFormChange={this.onFormChange}
                />
                <Button type='submit' className='bg-primary'>Submit</Button>
            </Form>
        )
    }
}

export default FormMain