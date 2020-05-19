import { DELETE_PROJECT, GET_TASKS } from '../actions/types';
const initialState = {
    projectTasks: [],
    project: {}
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                projectTasks: action.payload
            };
        // case GET_PROJECT:
        //     return {
        //         ...state,
        //         project: action.payload
        //     };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(
                    project => project.projectIdentifier !== action.payload
                )

            };
        default:
            return state;
    }
}