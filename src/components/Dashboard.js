import React from 'react';
import ProjectItem from './Projects/ProjectItem.js';
import{connect} from'react-redux';
import PropTypes from 'prop-types';
import {getProjects} from "../actions/ProjectAction";
import Createprojectbutton from './Projects/Createprojectbutton.js';
class Dashboard extends React.Component
{
    componentDidMount()
    {
        this.props.getProjects();
    }
    render()
    {
       const {projects}=this.props.projects;
        return(
        <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                   <Createprojectbutton/>
                    <br />
                    <hr />
                    {projects.map(project =>(
                        <ProjectItem key={project.id} project={project}/>
                    ))}
                    
                    
        </div>
        </div>
        </div>
        </div>
        );
         }
}
Dashboard.propTypes={
        projects:PropTypes.object.isRequired,
        getProjects:PropTypes.func.isRequired
    };
const mapStateToProps = state =>(
{
    projects:state.projects
});


export default connect(mapStateToProps,{getProjects})(Dashboard);
