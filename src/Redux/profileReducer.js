import {profileAPI, usersAPI} from "../api/Api";

const addPost = 'ADD-POST';
const setUserProfileCase = 'SET-USER-PROFILE';
const setStatusCase = 'SET-STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you?', likesCount: 10},
        {id: 2, message: 'It is my 1st post', likesCount: 15},
        {id: 3, message: 'Haha how are you mate?', likesCount: 18},
        {id: 4, message: 'Sweet as!', likesCount: 46},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    // debugger;
    switch (action.type) {

        case addPost: {
            let newPost = {
                id: 10,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case setUserProfileCase: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case setStatusCase: {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return state;
    }
}

//Action creators
export const addPostActionCreator = (newPostText) => ({type: addPost, newPostText})
export const setUserProfile = (profile) => ({type: setUserProfileCase, profile})
export const setStatus = (status) => ({type: setStatusCase, status});

//Thunks
export const getUserProfile = (userId) => (dispatch) => {
    return usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatus = (userId) => (dispatch) => {
     profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}


export default profileReducer;
