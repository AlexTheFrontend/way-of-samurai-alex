import {getAuthUserData} from "./authReducer";

const setInitialisedCase = 'SET-INITIALISED';

let initialState = {
    initialised: false,
};

const appReducer = (state = initialState, action) => {

    // debugger;
    switch (action.type) {
        case initialState:
            return {
                ...state,
                initialised: true,
            }
        default:
            return state;
    }
}

// Clean F to return actions
export const setInitialisedSuccess = () => ({type: setInitialisedCase});

export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //dispatch(smtElse());
    //dispatch(smtElse());
    // promise.then(() => {
    //     dispatch(setInitialisedSuccess());
    // })
    Promise.all ([promise])
        .then(() => {
            dispatch(setInitialisedSuccess());
        })

}


export default appReducer;
