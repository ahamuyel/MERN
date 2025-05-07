import React from "react"

function UpdateUser () {
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <h3>Upudate user</h3>
                    <form>
                        <div className="mb-2 d-grid">
                            {/* <label htmlFor="">Name</label> */}
                            <input type="text" placeholder="Enter Name" className="form" />
                        </div>
                        <div className="mb-2 d-grid">
                            {/* <label htmlFor="">Email</label> */}
                            <input type="text" placeholder="Enter Email" className="form" />
                        </div>
                        <div className="mb-2 d-grid">
                            {/* <label htmlFor="">Age</label> */}
                            <input type="text" placeholder="Enter Age" className="form" />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default UpdateUser