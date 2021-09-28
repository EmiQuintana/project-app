import React from 'react'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Main = (props) => {

    console.log(props.projects)
    return (
        <div className="container-sm">
            <div className="d-flex justify-content-between mb-3 mt-3">
                <div className="col-4 ms-3">
                    <h2>My projects</h2>
                </div>
                <div className="col-4 me-2">
                    <Link
                        to="/newproject"
                    >
                        <button className="btn btn-danger">
                            <i className="bi bi-plus-circle-fill px-1"></i>
                            Add project
                        </button>
                        
                    </Link>
                </div>
            </div>
            <div>
                
                    {
                        props.projects.length > 0 ?
                        props.projects.map(project => (
                            <div key={project.id} className="card container shadow-sm p-3 mb-3 bg-body rounded">
                                <div className="d-flex justify-content-between col-12">
                                    <div>
                                        <h4>{project.projectName}</h4>
                                        <div  className="d-flex">
                                            <div><Avatar>E</Avatar></div>
                                            <div className="pt-2 ps-2"><p>{project.assignedTo}</p></div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Link
                                            to="/editproject"
                                            className="me-2 btn btn-outline-secondary btn-sm"
                                            onClick={() => {props.editRow(project)}}
                                        >
                                            <i className="bi bi-box-arrow-in-down-left"></i>
                                            Edit
                                        </Link>
                                        <button className="me-2 btn btn-outline-danger btn-sm"
                                            onClick={() => props.deleteProject(project.id)}
                                        >
                                            <i className="bi bi-file-earmark-x"></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <h4>No projects available</h4>
                        )
                    }
                
            </div>
        </div>
    )
}

export default Main
