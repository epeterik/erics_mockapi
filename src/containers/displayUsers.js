//default imports
import React, { Component } from 'react';

//import NM UI Toolkit
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//app imports
import { convertSecondsDateToLocalDate } from '../actions/utility';
import { deleteSpecificUser,
         showIndividualUser,
         editUser,
         addUser } from '../actions/actions';


class DisplayUsers extends Component {
    constructor(props) {
        super(props);
        
        this.mapListOfUsersForTableDisplay = this.mapListOfUsersForTableDisplay.bind(this);
    }

    mapListOfUsersForTableDisplay(userObject, arrayIndex)
    {
        //console.log("in mapListOfFilmsToDisplay", filmObject);
        console.log("in mapListOfUsersForTableDisplay - processing index: " + arrayIndex + " - user object: ", userObject);

        //generate users full name for display
        let localFullName = userObject.firstName + " " + userObject.lastName; 

        return (
            <tr key={"userRow" + arrayIndex}>
                <td key={"userNameColumnRow" + arrayIndex}>{localFullName}</td>
                <td key={"userEmailColumnRow" + arrayIndex}>{userObject.email}</td>
                <td key={"userCreatedAtColumnRow" + arrayIndex}>{convertSecondsDateToLocalDate(userObject.createdAt)}</td>
                <td key={"userActionsColumnRow" + arrayIndex}>
                    <span style={{color: "blue"}} onClick={() => this.props.showUser(userObject)}>show</span>&nbsp;|&nbsp;
                    <span style={{color: "blue"}} onClick={() => this.props.editUser(userObject)}>edit</span>&nbsp;|&nbsp;
                    <span style={{color: "blue"}} onClick={() => this.props.deleteUser(userObject.id)}>delete</span>
                </td>
            </tr>
        )
    } //end of mapListOfUsersForTableDisplay

  render() {
    return (
      <div>

            <table className="table scrollable" summary="Main User List Table">
            <caption className="show-for-sr">Main User List Table</caption>
                <thead>
                    <tr>
                        <th width="400">Name</th>
                        <th width="200" className="text-center">Email</th>
                        <th width="150" className="text-center">Created At</th>
                        <th width="250">Actions</th>
                    </tr>
                </thead>
                <tbody style={{height: "350px"}}>
                    {this.props.usersList.map(this.mapListOfUsersForTableDisplay)}
                </tbody>
            </table>
            <p><span style={{color: "blue"}} onClick={() => this.props.addNewUserAction()}>Add New user</span></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      usersList: state.userList
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userId) => {
            dispatch(deleteSpecificUser(userId));
        },
        showUser: (userObject) => {
            dispatch(showIndividualUser(userObject));
        },
        editUser: (userObject) => {
            dispatch(editUser(userObject));
        },
        addNewUserAction: () => {
          dispatch(addUser());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUsers);