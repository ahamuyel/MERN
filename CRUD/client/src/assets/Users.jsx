import React, { useState } from "react"
import { Link } from "react-router-dom"

function Users () {
    const [users, setUsers] = useState([
        {Name: "Alberto", Email: "albertoih@gmail.com", Age: 21},
        {Name: "Zagazelle", Email: "zagazelle@gmail.com", Age: 19},
        
])  


    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className="btn btn-primary">Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                        <Link to="/update" className="btn btn-primary">Edit user</Link>
                                        {/* <button className="btn btn-success">Edit</button> */}
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users