import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router";

// container component for Profile
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        //default profile
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

//returning an object
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

// will get data from URL
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
