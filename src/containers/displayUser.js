//default imports
import React, { Component } from 'react';

//import NM UI Toolkit
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//app imports
import { convertSecondsDateToLocalDate } from '../actions/utility';
import { deleteSpecificUser,
         goBackToShowAll, 
         editUser } from '../actions/actions';


class DisplayUser extends Component {

  render() {

    let localUserName = this.props.userToDisplay.firstName + " " + this.props.userToDisplay.lastName;

    return (
      <div>
            <h1>User ID: {this.props.userToDisplay.id}</h1>
            <p>Full Name: {localUserName}</p>
            <p>Email: {this.props.userToDisplay.email}</p>
            <p>Created At: {convertSecondsDateToLocalDate(this.props.userToDisplay.createdAt)}</p>
            <div>
                <span style={{color: "blue"}} onClick={() => this.props.goBack()}>back</span>&nbsp;|&nbsp;
                <span style={{color: "blue"}} onClick={() => this.props.editUser(this.props.userToDisplay)}>edit</span>&nbsp;|&nbsp;
                <span style={{color: "blue"}} onClick={() => this.props.deleteUser(this.props.userToDisplay.id)}>delete</span>
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      userToDisplay: state.displayUserInfo
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userId) => {
            dispatch(deleteSpecificUser(userId));
        },
        goBack: () => {
            dispatch(goBackToShowAll());
        },
        editUser: (userObject) => {
            dispatch(editUser(userObject))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUser);