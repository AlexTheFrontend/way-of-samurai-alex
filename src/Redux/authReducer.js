import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

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
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: setUserDataCase,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {

    const response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const serverMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: serverMessage}))
    }

}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false))
    }

}

export default authReducer;
