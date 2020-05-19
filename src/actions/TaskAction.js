import axios from 'axios';
import { GET_ERRORS,GET_TASKS,DELETE_PROJECT } from './types';
export const createTask = (task, history) => async dispatch => {
    try {
        debugger
        await axios.post("http://localhost:8080/tasks", task);
        history.push("/projectBoard/"+task.projectId);
    } catch (error) {
        debugger
        console.log(error.response);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};


// export const getTasks = () => async dispatch => {
//     const res = await axios.get("http://localhost:8080/getAll");
//     dispatch({
//         type: GET_TASKS,
//         payload: res.data
//     });
// };

export const getTasks = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/getTask/${id}`);
    dispatch({
        type: GET_TASKS,
        payload: res.data
    });
};


export const deleteProject = id => async dispatch => {
    debugger
    await axios.delete(`http://localhost:8080/deleteProject/${id}`);
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    });
};



