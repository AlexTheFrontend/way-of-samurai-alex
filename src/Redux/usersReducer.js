const follow = 'FOLLOW-USER';
const unfollow = 'UNFOLLOW-USER';
const setUsers = 'SET-USERS'

let initialState = {
  listOfUsers: [
    {
      id: 1,
      photoUrl: 'https://images.immediate.co.uk/production/volatile/sites/7/2020/07/Alexander-the-Great-2-e2a4ed7.jpg?quality=90&resize=620,413',
      followed: false,
      fullName: 'Alex',
      status: 'Developer',
      location: {city: 'Auckland', country: 'New Zealand'}
    },
    {
      id: 2,
      photoUrl: 'https://images.immediate.co.uk/production/volatile/sites/7/2020/07/Alexander-the-Great-2-e2a4ed7.jpg?quality=90&resize=620,413',
      followed: true,
      fullName: 'Vasya',
      status: 'Supply Chain',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3,
      photoUrl: 'https://images.immediate.co.uk/production/volatile/sites/7/2020/07/Alexander-the-Great-2-e2a4ed7.jpg?quality=90&resize=620,413',
      followed: false,
      fullName: 'Andy',
      status: 'Sales',
      location: {city: 'Yourk New', country: 'USA'}
    },
    {
      id: 4,
      photoUrl: 'https://images.immediate.co.uk/production/volatile/sites/7/2020/07/Alexander-the-Great-2-e2a4ed7.jpg?quality=90&resize=620,413',
      followed: true,
      fullName: 'Henry',
      status: 'Head-Developer',
      location: {city: 'Vancouver', country: 'Canada'}
    },
  ],
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
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

// Clean F to return actions
export const followAC = (userId) => ({type: follow, userId});
export const unfollowAC = (userId) => ({type: unfollow, userId});
export const setUsersAC = (users) => ({type: setUsers, users});

export default usersReducer;