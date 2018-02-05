//default imports
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

//import NM UI Toolkit
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//app imports
import { MockAPIHeader } from '../components/header';
import { getAllUsers } from '../actions/actions';
import DisplayUsers from './displayUsers';
import DisplayUser from './displayUser';
import EditUser from './editUsers';
import AddUser from './addUsers';

class App extends Component {
  componentDidMount() {
    this.props.getAllUsersList();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MockAPIHeader />
        {this.props.showSingleUserInfo !== undefined ? <DisplayUser /> : 
         this.props.showEditUserInfo !== undefined ? <EditUser /> : 
         this.props.showAddNewUser !== false ? <AddUser /> : 
         <DisplayUsers />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      showSingleUserInfo: state.displayUserInfo,
      showEditUserInfo: state.editUserInfo,
      showAddNewUser: state.addNewUser
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsersList: () => {
            dispatch(getAllUsers());
       }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);