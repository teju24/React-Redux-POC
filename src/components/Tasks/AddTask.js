import React from 'react';
import { createTask } from "../../actions/TaskAction";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class AddTask extends React.Component {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;
        this.state = {
            summary: "",
            projectId: id,
            description: "",
            due_date: "",
            priority:"",
            acceptancecriteria:"",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    onSubmit(event) {
        event.preventDefault();
        const newTask = {
            summary: this.state.summary,
            projectId: this.state.projectId,
            acceptancecriteria:this.state.acceptancecriteria,
            due_date: this.state.due_date,
            status:this.state.status,
            priority:this.state.priority
        };
        this.props.createTask(newTask, this.props.history);
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Add/Update Project Task</h5>
                            <div className="text-center">Project name + project code</div>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Project Task Summary"
                                        name="summary"
                                        value={this.state.summary}
                                        onChange={this.onChange} />
                                    <p>{this.state.errors.summary}</p>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        placeholder="Acceptance criteria"
                                        name="acceptancecriteria"
                                        value={this.state.acceptancecriteria}
                                        onChange={this.onChange} />
                                    <p>{this.state.errors.acceptancecriteria}</p>
                                </div>

                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        placeholder="dd-mm-yyyy"
                                        className="form-control form-control-lg"
                                        name="due_date"
                                        value={this.state.due_date}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <select
                                    name="priority"
                                    className="form-control form-control-lg" 
                                    value={this.state.priority}
                                    onChange={this.onChange} required>
                                        <option defaultValue>Select Priority</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
                                <p>{this.state.errors.priority}</p>

                                <div className="form-group">
                                    <select
                                    name="status"
                                    className="form-control form-control-lg" 
                                    value={this.state.status}
                                    onChange={this.onChange} required>
                                        <option defaultValue>Select Status</option>
                                        <option value="todo">To Do</option>
                                        <option value="inprogress">In Progress</option>
                                        <option value="done">Done</option>
                                    </select>
                                </div>
                                <p>{this.state.errors.status}</p>

                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddTask.propTypes = {
  createTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createTask }) (AddTask);
