import {createSelector} from 'reselect'

// simple selector
const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

// State is coming from the parent component,
// 1st parameter needs a primitive selector as a 1st props
export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.users;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}



export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
