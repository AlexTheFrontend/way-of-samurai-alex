import {profileAPI, usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const addPost = 'ADD-POST';
const setUserProfileCase = 'SET-USER-PROFILE';
const setStatusCase = 'SET-STATUS'
const deleteOnePost = 'DELETE-POST'
const saveNewAvatar = 'SAVE-AVATAR-SUCCESS'

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

        case deleteOnePost: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }

        case saveNewAvatar: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const deletePost = (postId) => ({type: deleteOnePost, postId});
export const saveAvatarSuccess = (photos) => ({type: saveNewAvatar, photos});

//Thunks
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response?.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response?.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)

        if (!response?.data.resultCode) {
            dispatch(setStatus(status));
        }
    } catch (err) {
        console.log(`You have an API error, please check your keys`)
    }

}

export const saveAvatar = (file) => async (dispatch) => {
    const response = await profileAPI.saveAvatar(file)

    if (!response?.data.resultCode) {
        dispatch(saveAvatarSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (!response?.data.resultCode) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;
