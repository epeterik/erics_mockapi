//default imports
import React, { Component } from 'react';

//import NM UI Toolkit
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//app imports
import { goBackToShowAll, 
         addUserCreate } from '../actions/actions';
import { WaitSpinner } from '../components/waitSpinner';


class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "", 
            lastName: "",
            email: ""
        }

        //local bindings to class
        this.handleAddNewUser = this.handleAddNewUser.bind(this);
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

    handleAddNewUser = () => {
        console.log("Entering handleAddNewUser");
        this.props.addThisUser({...{}, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email});
        console.log("Leaving handleAddNewUser");
    }

  render() {

    return (
      <div>
            { this.props.addUserIsProcessing ? 
                <WaitSpinner isWaiting={this.props.addUserIsProcessing} />
            :
                <div>
                    <p>First Name: <input value={this.state.firstName} onChange={this.handleFirstNameUpdate} /></p>
                    <p>Last Name: <input value={this.state.lastName} onChange={this.handleLastNameUpdate} /></p>
                    <p>Email: <input value={this.state.email} onChange={this.handleEmailUpdate} /></p>
                    <button className="button btn-cta small" onClick={this.handleAddNewUser}>Create</button>
                    <div>
                        <span style={{color: "blue"}} onClick={() => this.props.backToShowAllList()}>Back to Show List</span>
                    </div>
                </div>
            }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      addUserIsProcessing: state.addUserIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        backToShowAllList: () => {
            dispatch(goBackToShowAll());
        },
        addThisUser: (newUserInfo) => {
            dispatch(addUserCreate(newUserInfo));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);