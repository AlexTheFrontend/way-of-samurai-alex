const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY';
const sendMessage = 'SEND-MESSAGE';

const dialogReducer = (state, action) => {
  // debugger;
  // Switch instead of if/else if expression
  switch (action.type) {
    case updateNewMessageBody:
      state.newMessageBody = action.body;
      return state;
    case sendMessage:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 6, message: body});
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: sendMessage});
export const updateNewMessageBodyCreator = (body) => ({type: updateNewMessageBody, body: body});

export default dialogReducer;


