import React from 'react';
import { connect } from 'react-redux';
import CreateTaskbutton from './CreateTaskbutton';
import TaskItem from './TaskItem';
import { getTasks } from "../../actions/TaskAction";
import PropTypes from 'prop-types';

class ProjectBoard extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getTasks(id);
    }
    render() {
        const { projectTasks } = this.props.projectTasks;

        const todoTask = projectTasks
            .filter(task => task.status === "todo")


        const inProgressTask = projectTasks
            .filter(pt => pt.status === "inprogress")


        const doneTask = projectTasks
            .filter(pt => pt.status === "done")


        const { id } = this.props.match.params;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <CreateTaskbutton id={id}/>
                            <br />
                            <hr />

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card text-center mb-2">
                                            <div className="card-header bg-secondary text-white">
                                                <h3>TO DO</h3>
                                            </div>
                                        </div>
                                        {todoTask.map(task => (
                                            <TaskItem key={task.taskId} task={task} />
                                        ))}
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-center mb-2">
                                            <div className="card-header bg-primary text-white">
                                                <h3>In Progress</h3>
                                            </div>
                                        </div>
                                        {inProgressTask.map(task => (
                                            <TaskItem key={task.taskId} task={task}  />
                                        ))}

                                    </div>
                                    <div className="col-md-4">
                                        <div className="card text-center mb-2">
                                            <div className="card-header bg-success text-white">
                                                <h3>Done</h3>
                                            </div>
                                        </div>
                                        {doneTask.map(task => (
                                            <TaskItem key={task.taskId} task={task}/>
                                        ))}

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ProjectBoard.propTypes = {
    projectTasks: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired
};
const mapStateToProps = state => (
    {
        projectTasks: state.projectTasks
    });


export default connect(mapStateToProps, { getTasks })(ProjectBoard);
