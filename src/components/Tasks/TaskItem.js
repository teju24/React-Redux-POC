import React from 'react';
import { Link } from "react-router-dom"

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteProject } from "../../actions/ProjectAction";

class TaskItem extends React.Component {
    onDeleteClick = id => {
        console.log("delete method called");
        this.props.deleteProject(id);
    };
    render() {
        debugger
        const { task } = this.props;
        console.log("task", task);
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3 task-card">
                    <div className="task-div">
                        <div className="task-card-header">
                            <span>ID:TESTR-{task.taskId}</span>
                            <span>--</span>
                            <span>Priority:{task.priority}</span>
                        </div>
                        <div className="summary-div">
                            <h4>{task.summary}</h4>
                        </div>
                        <div className="d-flex justify-content-center btn-div">

                            <Link className="btn btn-sm btn-info task-btn" to={`/updateproject/${task.taskId}`}>
                                View/Update Task
                            </Link>
                            <button
                                className="btn btn-sm btn btn-outline-danger"
                                onClick={this.onDeleteClick.bind(this, task.taskId)}>
                                Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}
TaskItem.propTypes = {
    deleteProject: PropTypes.func.isRequired,
};
export default connect(null, { deleteProject })(TaskItem);


