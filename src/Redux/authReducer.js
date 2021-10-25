import {authAPI, securityAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const setUserDataCase = 'SET-USER-DATA';
const getCaptchaURLSuccess = 'GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null, // if response is 0, then captcha is not required
};

const authReducer = (state = initialState, action) => {

    // debugger;
    switch (action.type) {
        case setUserDataCase:
        case getCaptchaURLSuccess:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

// Clean F to return actions
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: setUserDataCase,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaURLDispatch = (captchaURL) => ({
    type: getCaptchaURLSuccess,
    payload: {captchaURL}
});

export const getAuthUserData = () => async (dispatch) => {

    const response = await authAPI.me()

    if (!response?.data.resultCode) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    const response = await authAPI.login(email, password, rememberMe, captcha)

    if (!response?.data.resultCode) {
        // successfully logged in and getting the data
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL())
        }
        const serverMessage = response.data.messages.length > 0 ? response?.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: serverMessage}))
    }
}

// this is THUNK to make a call, wait for result and dispatch it to be used
export const getCaptchaURL = () => async (dispatch) => {

    const response = await securityAPI.getCaptchaURL();
    const captchaURL = response?.data.url;

    dispatch(getCaptchaURLDispatch(captchaURL))

}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (!response?.data.resultCode) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;
