const sendMessage = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 45, name: 'Sergey'},
    {id: 46, name: 'Dennis'},
    {id: 47, name: 'Roman'},
    {id: 48, name: 'Nadya'},
    {id: 49, name: 'Dima'},
  ],
  messages: [
    {id: 10, message: 'Hello'},
    {id: 11, message: 'Sup!'},
    {id: 12, message: 'Who made it?'},
    {id: 13, message: 'Some Russian developer, I think'},
    {id: 14, message: 'I want to hire him now!'},
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


