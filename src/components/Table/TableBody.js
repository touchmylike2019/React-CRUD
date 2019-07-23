import React from 'react'
import { Button } from 'reactstrap'

const TableBody = props => {
    const member = props.members.map((data, index) => (
            <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
                <td><Button 
                        color="Delete" 
                        onClick={() => props.remove(index)}>danger
                    </Button>
                </td>
            </tr>
    ))
    return (<tbody>{member}</tbody>)
}

export default TableBody
