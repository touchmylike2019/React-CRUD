import React from 'react'
import { Button } from 'reactstrap'

const TableBody = props => {
    const member = props.members.map((data, index) => (
            <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
                <td><Button  
                        className='bg-warning border-0 mr-3'
                        onClick={() => props.edit(true, data, index)}>Edit
                    </Button>
                    <Button 
                        className='bg-danger border-0'
                        onClick={() => props.remove(index)}>Delete
                    </Button>
                </td>
            </tr>
    ))
    return (<tbody>{ member }</tbody>)
}

export default TableBody
