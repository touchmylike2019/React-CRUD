import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddForm extends Component{
    state = {}
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ 
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            age: this.age.value
        }, () => {
            this.props.handleForm(this.state)
            this.firstName.value = ''
            this.lastName.value = ''
            this.age.value = ''
        })
    }    
    render() {
        return (
            <div>
                <h2>Add Member</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>First Name: </Label>
                        <Input 
                        required
                        type='text' 
                        innerRef={e => this.firstName = e}
                    />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name: </Label>
                        <Input 
                            required
                            type='text' 
                            innerRef={e => this.lastName = e}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age: </Label>
                        <Input 
                            required
                            type='text' 
                            innerRef={e => this.age = e}
                        />
                    </FormGroup>
                    <Button className='bg-primary border-0'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AddForm