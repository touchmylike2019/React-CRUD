import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from './components/Header/Header'
import Table from './components/Table/TableForm'
import Form from './components/Form/FormMain'

class App extends Component{
	state = {
		members: []
	}
	handleForm = member => {
		this.setState(prevState => ({
			members: [...prevState.members, member]
		}))
	}
	removeMember = index => {
		this.setState(prevState => ({
			members: prevState.members.filter((member, i) => {
				return i !== index
			})
		}))
	}
	render(){
		return(
			<Container >
				<Header />
				<Table 
					members={this.state.members}
					remove={this.removeMember}
				/>
				<Form handleForm={this.handleForm}/>
			</Container>
		)
	}
}

export default App
