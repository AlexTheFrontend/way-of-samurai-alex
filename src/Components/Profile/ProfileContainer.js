import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

// container component for Profile
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        //default profile
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//returning an object
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// will get data from URL
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
