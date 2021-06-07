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
                ...action.payload,
            }
        default:
            return state;
    }
}

// Clean F to return actions
export const setAuthUserData = (userId, email, login, isAuth) => ({type: setUserDataCase, payload: { userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export const logout = () => (dispatch) => {
    return authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;
