const followCase = 'FOLLOW-USER';
const unfollowCase = 'UNFOLLOW-USER';
const setUsersCase = 'SET-USERS';
const setCurrentPageCase = 'SET-CURRENT-PAGE';
const setTotalUsersCountCase = 'SET-TOTAL-USERS-COUNT';
const toggleIsFetchingCase = 'TOGGLE-IS-FETCHING';
const toggleIsFollowingProgressCase = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  users: [ ],
  pageSize: 5,
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
        // users: state.users.map(u => u),
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case unfollowCase:
      return {
        ...state,
        // users: state.users.map(u => u),
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
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
            : state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state;
  }
}

// Clean F to return actions
export const follow = (userId) => ({type: followCase, userId});
export const unfollow = (userId) => ({type: unfollowCase, userId});
export const setUsers = (users) => ({type: setUsersCase, users});
export const setCurrentPage = (currentPage) => ({type: setCurrentPageCase, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: setTotalUsersCountCase, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: toggleIsFetchingCase, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: toggleIsFollowingProgressCase, isFetching, userId})

export default usersReducer;
