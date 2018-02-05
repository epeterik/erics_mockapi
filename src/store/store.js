import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

//app based imports
import reducer from '../reducer/reducer'

const initialState = {
    userList: [],
    userListLoading: false,
    userListRetrievalError: false,
    userDeleteError: false,
    displayUserInfo: undefined,
    editUserInfo: undefined,
    editUserIsLoading: false,
    addNewUser: false,
    addNewUserIsLoading: false
}

export default createStore(
    reducer,  //local reducer from reducer
    initialState, //set initial state
    applyMiddleware(logger, thunk)
); //apply both the thunk and the redux logger middleware