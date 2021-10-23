import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, saveAvatar, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";

// container component for Profile
class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        //default profile
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        // setTimeout(() => {
        this.props.getStatus(userId);
        // }, 1000)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    // using to update other user's data when redirection on it
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     saveAvatar={this.props.saveAvatar}/>
        );
    }

}

//returning an object
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, saveAvatar}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

