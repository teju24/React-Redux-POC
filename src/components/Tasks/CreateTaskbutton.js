import { Link } from "react-router-dom"
import React from 'react'

const CreateTaskbutton=(props)=>{
    const { id } = props;
    return(
        
        <React.Fragment>
        <Link className="btn btn-lg btn-info" to={`/addtask/${id}`}>Create Project Task</Link>
        </React.Fragment>
    )
}

export default CreateTaskbutton;