import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    // getting state from users page as a container component
    listOfUsers: state.usersPage.listOfUsers
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
  //  callback F
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);



