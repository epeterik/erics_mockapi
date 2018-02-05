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
    ADD_USER_CREATE_LOADING} from '../actions/types';

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALL_USERS: 
            console.log("SHOW_ALL_USERS");
            state = {...state, 
                displayUserInfo: undefined,
                editUserInfo: undefined, 
                addNewUser: false,
                userList: action.payload}
            return state;
        case SHOW_ALL_USERS_LOADING: 
            console.log("SHOW_ALL_USERS_LOADING");
            state = {...state, 
                userListLoading: action.payload}
            return state;
        case SHOW_ALL_USERS_ERROR: 
            console.log("SHOW_ALL_USERS_ERROR");
            state = {...state, 
                userListRetrievalError: action.payload}
            return state;
        case USER_DELETION_ERROR: 
            console.log("USER_DELETION_ERROR");
            state = {...state, 
                userDeleteError: action.payload}
            return state;
        case SHOW_INDIVIDUAL_USER: 
            console.log("SHOW_INDIVIDUAL_USER");
            state = {...state, 
                displayUserInfo: action.payload}
            return state;
        case GO_BACK_TO_SHOW_ALL:
            console.log("GO_BACK_TO_SHOW_ALL");
            state = {...state, 
                editUserInfo: undefined, 
                displayUserInfo: undefined,
                addNewUser: false}
            return state;
        case EDIT_USER: 
            console.log("EDIT_USER");
            state = {...state, 
                displayUserInfo: undefined,
                editUserInfo: action.payload}
            return state; 
        case EDIT_USER_UPDATE: 
            console.log("EDIT_USER_UPDATE");
            return state; 
        case EDIT_USER_UPDATE_LOADING: 
            console.log("EDIT_USER_UPDATE_LOADING");
            state = {...state, 
                editUserIsLoading: action.payload};
            return state;
        case ADD_USER: 
            console.log("ADD_USER");
            state = {...state, 
                addNewUser: true}
            return state;
        case ADD_USER_CREATE:
            console.log("ADD_USER_CREATE");
            return state;
        case ADD_USER_CREATE_LOADING: 
            console.log("ADD_USER_CREATE_LOADING");
            state = {...state, 
                addNewUserIsLoading: action.payload}
            return state;
        default: 
            return state;
    } //end switch

} //end of ghibliReducer

export default reducer;