import {authAPI} from "../api/Api";

const setUserDataCase = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    // debugger;
    switch (action.type) {
        case setUserDataCase:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

// Clean F to return actions
export const setAuthUserData = (userId, email, login) => ({type: setUserDataCase, data: { userId, email, login}});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    })
}

export default authReducer;
