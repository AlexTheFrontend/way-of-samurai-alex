import React from 'react';
// import classes from './ProfileInfo.module.css';
// import Preloader from "../../Common/Preloader/Preloader";

class ProfileStatus extends React.Component {

    state = {
        editState: false,
        status: this.props.status,
    }

    // method
    // setState is async
    activateEditState = () => {
        this.setState({
            editState: true,
        })
    }

    deactivateEditState = () => {
        this.setState({
            editState: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {

        return (
            // Using local state through container component, will be refactored with hooks later on
            // Changing state on an event - double click
            // Deactivating when clicking out of the input
            <div>
                {!this.state.editState ?
                    <div>
                        <span onClick={ this.activateEditState }>{this.props.status || 'No status yet, please enter something!'}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditState }
                               onChange={this.onStatusChange} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
