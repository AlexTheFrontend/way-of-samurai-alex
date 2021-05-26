import React from 'react';
// import classes from './ProfileInfo.module.css';
// import Preloader from "../../Common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    state = {
        editState: false,
    }

    // method
    // setState is async
    activateEditState () {
        this.setState({
            editState: true,
        })
    }

    deactivateEditState () {
        this.setState({
            editState: false,
        })
    }

    render() {

        return (
            // Using local state through container component, will be refactored with hooks later on
            // Changing state on an event - double click
            // Deactivating when clicking out of the input
            <div>
                {!this.state.editState ?
                    <div>
                        <span onDoubleClick={ this.activateEditState.bind(this) }>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditState.bind(this) } value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
