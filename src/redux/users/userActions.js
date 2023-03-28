import axios from "axios";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userActionTypes";

export const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST,
    }
}

export const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

export const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://61b095283c954f001722a4a6.mockapi.io/api/user/users')
        .then(response => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err => {
            const errorMsg = err.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}

export const editUser = (id, data) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.put(`https://61b095283c954f001722a4a6.mockapi.io/api/user/users/${id}`, data)
        .then(response => {
            dispatch(fetchUsers())
        })
        .catch(err => {
            const errorMsg = err.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.delete(`https://61b095283c954f001722a4a6.mockapi.io/api/user/users/${id}`)
        .then(response => {
            dispatch(fetchUsers())
        })
        .catch(err => {
            const errorMsg = err.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}