const follow = 'FOLLOW-USER';
const unfollow = 'UNFOLLOW-USER';
const setUsers = 'SET-USERS';
const setCurrentPage = 'SET-CURRENT-PAGE';
const setTotalUsersCount = 'SET-TOTAL-USERS-COUNT';
const toggleIsFetching = 'TOGGLE-IS-FETCHING';

let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {

  // debugger;
  switch (action.type) {
    case follow:
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
    case unfollow:
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
    case setUsers:
      return {
        ...state,
        users: action.users
      }

      case setCurrentPage:
      return {
        ...state,
        currentPage: action.currentPage
      }

      case setTotalUsersCount:
      return {
        ...state,
        totalUsersCount: action.count
      }
      case toggleIsFetching:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }
}

// Clean F to return actions
export const followAC = (userId) => ({type: follow, userId});
export const unfollowAC = (userId) => ({type: unfollow, userId});
export const setUsersAC = (users) => ({type: setUsers, users});
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: setTotalUsersCount, count: totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: toggleIsFetching, isFetching})

export default usersReducer;