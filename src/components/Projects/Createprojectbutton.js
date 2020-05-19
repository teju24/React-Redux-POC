import { Link } from "react-router-dom"
import React from 'react'

const Createprojectbutton=()=>{

    return(
        <React.Fragment>
        <Link className="btn btn-lg btn-info" to='/addproject'>Create project</Link>
        </React.Fragment>
    )
}

export default Createprojectbutton;