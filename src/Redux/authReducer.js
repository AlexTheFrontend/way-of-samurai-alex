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

export default authReducer;
