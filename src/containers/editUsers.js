//default imports
import React, { Component } from 'react';

//import NM UI Toolkit
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//app imports
import { deleteSpecificUser,
         goBackToShowAll, 
         editUserUpdate } from '../actions/actions';
import { WaitSpinner } from '../components/waitSpinner';


class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.userToEdit.firstName, 
            lastName: props.userToEdit.lastName,
            email: props.userToEdit.email
        }

        //local bindings to class
        this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this);
    }

    handleFirstNameUpdate = (event) => {
        console.log("Entering handleFirstNameUpdate");
        let localValue = event.target.value;
        this.setState({firstName: localValue});
        console.log("Leaving handleFirstNameUpdate");
    }

    handleLastNameUpdate = (event) => {
        console.log("Entering handleLastNameUpdate");
        let localValue = event.target.value;
        this.setState({lastName: localValue});
        console.log("Leaving handleLastNameUpdate");
    }

    handleEmailUpdate = (event) => {
        console.log("Entering handleEmailUpdate");
        let localValue = event.target.value;
        this.setState({email: localValue});
        console.log("Leaving handleEmailUpdate");
    }

    handleUserUpdate = () => {
        console.log("Entering handleUserUpdate");
        this.props.editUserUpdate({...this.props.userToEdit, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email});
        console.log("Leaving handleUserUpdate");
    }

  render() {

    return (
      <div>
            <h1>User ID: {this.props.userToEdit.id}</h1>
            { this.props.editUserIsProcessing ? 
                <WaitSpinner isWaiting={this.props.editUserIsProcessing} />
            :
                <div>
                    <p>First Name: <input value={this.state.firstName} onChange={this.handleFirstNameUpdate} /></p>
                    <p>Last Name: <input value={this.state.lastName} onChange={this.handleLastNameUpdate} /></p>
                    <p>Email: <input value={this.state.email} onChange={this.handleEmailUpdate} /></p>
                    <button className="button btn-cta small" onClick={this.handleUserUpdate}>Update</button>
                    <div>
                        <span style={{color: "blue"}} onClick={() => this.props.backToShowAllList()}>Show All</span> | <span style={{color: "blue"}} onClick={() => this.props.deleteUser(this.props.userToEdit.id)}>delete</span>
                    </div>
                </div>
            }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      userToEdit: state.editUserInfo,
      editUserIsProcessing: state.editUserIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userId) => {
            dispatch(deleteSpecificUser(userId));
        },
        backToShowAllList: () => {
            dispatch(goBackToShowAll());
        },
        editUserUpdate: (updatedUserInfo) => {
            dispatch(editUserUpdate(updatedUserInfo));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);