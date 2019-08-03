import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class EditForm extends Component{
    state = {}
    componentDidMount(){
        const { firstName, lastName, age } = this.props.members
        this.firstName.value = firstName
        this.lastName.value = lastName
        this.age.value = age
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ 
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            age: this.age.value
        }, () => {
            this.props.update(this.state)
            this.firstName.value = ''
            this.lastName.value = ''
            this.age.value = ''
        })
    }
    render(){ 
        return(
            <div>
                <h2>Edit Member</h2>
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
                <Button 
                    className='bg-primary mr-3 border-0'>Update member
                </Button>
                <Button 
                    className='bg-light text-dark'
                    onClick={() => this.props.status(false)}>Cancle
                </Button>
            </Form>
            </div>
        )
    }
}

export default EditForm