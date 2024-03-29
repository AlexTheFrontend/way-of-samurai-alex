const sendMessage = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 11, name: 'Sol'},
        {id: 2, name: 'samurai dimych'},
        {id: 3, name: 'AlexanderKhodaryonok'},
        {id: 4, name: 'marina'},
        {id: 5, name: 'essedger'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Sup!'},
        {id: 2, message: 'Who made it?'},
        {id: 3, message: 'Some Russian developer, I think'},
        {id: 4, message: 'I want to hire him now!'},
    ]
}

const dialogReducer = (state = initialState, action) => {
    // debugger;
    // Switch instead of if/else if expression
    switch (action.type) {
        case sendMessage: {

            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: sendMessage, newMessageBody});

export default dialogReducer;


