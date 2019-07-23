import React, { Component } from 'react'
import { Table } from 'reactstrap'
import TableHead from './TableHead'
import TableBody from './TableBody'

class TableForm extends Component{
    render(){   
        const { members, remove } = this.props
        return(
            <Table hover className='mt-4'>
                <TableHead />
                <TableBody
                    remove={remove} 
                    members={members}
                />
            </Table>
        )
    }
}

export default TableForm