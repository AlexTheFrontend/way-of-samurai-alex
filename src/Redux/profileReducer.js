import {usersAPI} from "../api/Api";

const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT';
const setUserProfileCase = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'Hi how are you?', likesCount: 10},
    {id: 2, message: 'It is my 1st post', likesCount: 15},
    {id: 3, message: 'Haha how are you mate?', likesCount: 18},
    {id: 4, message: 'Sweet as!', likesCount: 46},
  ],
  newPostText: 'Placeholder Alex',
  profile: null,
};

const profileReducer = (state = initialState, action) => {

  // debugger;
  switch (action.type) {

    case addPost: {
      let newPost = {
        id: 10,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
      // Creating state copies to change and work with, we can't change the parent object
    case updateNewPost: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }

    case setUserProfileCase: {
      return {
        ...state,
        profile: action.profile,
      }
    }

    default:
      return state;
  }
}

//Action creators
export const addPostActionCreator = () => ({type: addPost})
export const setUserProfile = (profile) => ({type: setUserProfileCase, profile})
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPost, newText: text});

export const getUserProfile = (userId) => (dispatch) => {
  return usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  })
}


export default profileReducer;
