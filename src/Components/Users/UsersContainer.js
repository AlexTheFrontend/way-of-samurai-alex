import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow, toggleIsFollowingProgress
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/Api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                // as per provided API
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalUsersCount);
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
                this.props.toggleIsFetching(false);
                // as per provided API
                this.props.setUsers(data.items)
            })
    }

    render() {
        // <> in this case is zaglushka
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
        followingInProgress: state.usersPage.followingInProgress

    };
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
})(UsersContainer);



