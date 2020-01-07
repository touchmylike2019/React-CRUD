import React from 'react'
import { Table } from 'reactstrap'
import TableBody from './TableBody'

export default ({ members, remove, edit }) => (
    <Table hover className='mt-4'>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <TableBody
            remove={remove}
            members={members}
            edit={edit}
        />
    </Table>
)