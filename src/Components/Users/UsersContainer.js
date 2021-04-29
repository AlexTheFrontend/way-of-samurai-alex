import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    // getting state from users page as a container component
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,

  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    //  callback F
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);



