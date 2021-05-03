import React from "react";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC,
  unfollowAC
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
//change the colour!
import rings from "../../Pictures/rings.gif"
import styles from "./users.module.css";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false);
          // as per provided API
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false);
          // as per provided API
          this.props.setUsers(response.data.items)
        })
  }

  render() {
    // <> in this case is zaglushka
    return <>
      {this.props.isFetching ? <img className={styles.scater} src={rings} /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChange={this.onPageChange}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    // getting state from users page as a container component
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,

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
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



