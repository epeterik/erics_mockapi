//package imports
import axios from 'axios';

//App imports
import {SHOW_ALL_USERS, 
    SHOW_ALL_USERS_LOADING, 
    SHOW_ALL_USERS_ERROR, 
    USER_DELETION_ERROR, 
    SHOW_INDIVIDUAL_USER, 
    GO_BACK_TO_SHOW_ALL,
    EDIT_USER, 
    EDIT_USER_UPDATE, 
    EDIT_USER_UPDATE_LOADING, 
    ADD_USER,
    ADD_USER_CREATE, 
    ADD_USER_CREATE_LOADING} from './types';

export function getAllUsers() {
    return (dispatch) => {
        //send dispatch to store to alert that we are going to start loading users
        dispatch(showAllUsersLoading(true)); 

        //make axios call to get a list of mockAPI people
        axios.get('http://5a7772797cdb67001261461e.mockapi.io/users')
            .then((response) => {
                console.log("getAllUsers response: ", response);
                if (response.statusText !== "OK")
                {
                    //something wrong happened :( we encountered an error
                    dispatch(showAllUsersError(true));
                }
                else
                {
                    //We successfully got all the data! We're no longer loading anything
                    dispatch(showAllUsersLoading(false)); 
                }

                //send user data to store for display!
                dispatch(showAllUsers(response.data));
            })
            .catch((error) => {
                console.log(error);
                //something wrong happened :( we encountered an error
                showAllUsersError(true);
            })
    } //end return(dispatch)

} //end getAllUsers()

export function showAllUsers(userList) {
    return {
        type: SHOW_ALL_USERS,
        payload: userList
    }
}

export function showAllUsersLoading(currentlyFetchingData) {
    return {
        type: SHOW_ALL_USERS_LOADING,
        payload: currentlyFetchingData
    }
}

export function showAllUsersError(errorDuringFetch) {
    return {
        type: SHOW_ALL_USERS_ERROR,
        payload: errorDuringFetch
    }
}

export function deleteSpecificUser(userId) {

    return (dispatch) => {

        //make axios call to delete a specific user based on a supplied ID
        axios.delete('http://5a7772797cdb67001261461e.mockapi.io/users/' + userId)
            .then((response) => {
                console.log("deleteSpecificUser response: ", response);

                //User deleted, get new list of users
                dispatch(getAllUsers());
            })
            .catch((error) => {
                console.log(error);
                //something wrong happened :( we encountered an error
                deleteUserError(true);
            })
    } //end return(dispatch)

} //end of deleteSpecificUser()

export function deleteUserError(deletionError) {
    return {
        type: USER_DELETION_ERROR,
        payload: deletionError
    }
}

export function showIndividualUser(user) {
    return {
        type: SHOW_INDIVIDUAL_USER,
        payload: user
    }
}

export function goBackToShowAll() {
    return {
        type: GO_BACK_TO_SHOW_ALL
    }
}

export function editUser(user) {
    return {
        type: EDIT_USER,
        payload: user
    }
}

export function editUserUpdate(updatedUser) {

    console.log("Entering editUserUpdate - updatedUser object:", updatedUser);

    return (dispatch) => {
        //update status that the edit user is in progress! 
        dispatch(editUserIsLoading(true));

        //make axios call to change a specific user based on a supplied ID
        axios.put('http://5a7772797cdb67001261461e.mockapi.io/users/' + updatedUser.id, updatedUser)
            .then((response) => {
                console.log("editUserUpdate response: ", response);

                //User deleted, get new list of users
                dispatch(getAllUsers());

                //the user has been updated!
                dispatch(editUserIsLoading(false));
            })
            .catch((error) => {
                console.log(error);
                //something wrong happened :( we encountered an error
                deleteUserError(true);
            })
    } //end return(dispatch)

    //return {
    //    type: EDIT_USER_UPDATE
    //}
}

export function editUserIsLoading(editUserCurrentlyUpdating) {
    return {
        type: EDIT_USER_UPDATE_LOADING,
        payload: editUserCurrentlyUpdating
    }
}

export function addUser() {
    return {
        type: ADD_USER
    }
}

export function addUserCreate(newUser) {

    console.log("Entering addUserCreate - newUser object:", newUser);

    return (dispatch) => {
        //update status that the edit user is in progress! 
        dispatch(addUserCreateLoading(true));

        //make axios call to change a specific user based on a supplied ID
        axios.post('http://5a7772797cdb67001261461e.mockapi.io/users/', newUser)
            .then((response) => {
                console.log("addUserCreate response: ", response);

                //User deleted, get new list of users
                dispatch(getAllUsers());

                //the user has been updated!
                dispatch(addUserCreateLoading(false));
            })
            .catch((error) => {
                console.log(error);
                //something wrong happened :( we encountered an error
                deleteUserError(true);
            })
    } //end return(dispatch)

    //return {
    //    type: ADD_USER_CREATE
    //}
}

export function addUserCreateLoading(creatingUser) {
    return {
        type: ADD_USER_CREATE_LOADING,
        payload: creatingUser
    }
}