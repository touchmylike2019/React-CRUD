import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from './components/Header/Header'
import Table from './components/Table/TableForm'
import AddForm from './components/Form/AddForm'
import EditForm from './components/Form/EditForm'

class App extends Component{
	state = {
		members: [],
		editMember: {},
		editing: false,
		editIndex: 0
	}
	handleForm = member => {
		this.setState(prevState => ({
			members: [...prevState.members, member]
		}))
	}
	editMember = (status, updateMember, index) => {
		this.setState({editing: status})
		this.setState({editMember: updateMember})
		this.setState({editIndex: index})
	}
	updateMember = updateMember => {
		this.setState({editing: !this.state.editing})
		this.setState(prevState => ({
			members: prevState.members.map((member, index) => {
				return index === this.state.editIndex ? updateMember : member
			})
		}))
	}
	removeMember = removeIndex => {
		this.setState(prevState => ({
			members: prevState.members.filter((member, index) => {
				return index !== removeIndex
			})
		}))
	}
	render(){
		console.log(this.state)
		return(
			<Container >
				<Header />
				<Table 
					members={this.state.members}
					remove={this.removeMember}
					edit={this.editMember}
				/>
				{
					this.state.editing ? 
					<EditForm
						members={this.state.editMember} 
						update={this.updateMember}
						status={this.editMember}
					/> 
					: 
					<AddForm handleForm={this.handleForm}/>
				}
			</Container>
		)
	}
}

export default App
