import {usersAPI} from "../api/Api";
import {updateObjectInArray} from "../Utils/objectHelpers";

const followCase = 'FOLLOW-USER';
const unfollowCase = 'UNFOLLOW-USER';
const setUsersCase = 'SET-USERS';
const setCurrentPageCase = 'SET-CURRENT-PAGE';
const setTotalUsersCountCase = 'SET-TOTAL-USERS-COUNT';
const toggleIsFetchingCase = 'TOGGLE-IS-FETCHING';
const toggleIsFollowingProgressCase = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    // debugger;
    switch (action.type) {
        case followCase:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case unfollowCase:
            return {
                ...state,
                // users: state.users.map(u => u),
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case setUsersCase:
            return {
                ...state,
                users: action.users
            }

        case setCurrentPageCase:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case setTotalUsersCountCase:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case toggleIsFetchingCase:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case toggleIsFollowingProgressCase:
            return {
                ...state,
                // to have only ony request per click
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

// Clean F to return actions
export const followSuccess = (userId) => ({type: followCase, userId});
export const unfollowSuccess = (userId) => ({type: unfollowCase, userId});
export const setUsers = (users) => ({type: setUsersCase, users});
export const setCurrentPage = (currentPage) => ({type: setCurrentPageCase, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: setTotalUsersCountCase, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: toggleIsFetchingCase, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: toggleIsFollowingProgressCase,
    isFetching,
    userId
})

//function to dispatch actions (Thunks)

export const requestUsers = (currentPage, pageSize) => {

    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        // as per provided API
        dispatch(setUsers(data?.items));
        dispatch(setTotalUsersCount(data?.totalCount));
    }
}

// refactoring follow/unfollow to reduce code. Helpers method below
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProgress(true, userId));

    const response = await apiMethod(userId)
    if (!response?.data.resultCode) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer;
