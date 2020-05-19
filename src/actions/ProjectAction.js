import axios from 'axios';
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from './types';
export const createProject = (project, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/projects", project);
        history.push("/dashboard");
    } catch (error) {
        debugger
        console.log(error.response);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};


export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/getAll");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};

export const getProject = (id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/getProject/${id}`);
    dispatch({
        type: GET_PROJECT,
        payload: res.data
    });
};


export const deleteProject = id => async dispatch => {
    debugger
    await axios.delete(`http://localhost:8080/deleteProject/${id}`,{
        headers: { 
            'Access-Control-Allow-Origin' : '*',
          },
    });
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    });
};



