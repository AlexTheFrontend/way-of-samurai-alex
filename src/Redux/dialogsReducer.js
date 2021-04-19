const updateNewMessageBody = 'UPDATE-NEW-MESSAGE-BODY';
const sendMessage = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Dennis'},
    {id: 3, name: 'Roman'},
    {id: 4, name: 'Nadya'},
    {id: 5, name: 'Dima'},
    {id: 6, name: 'Julia'},
  ],
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Sup!'},
    {id: 3, message: 'Bruuuuuuuu'},
    {id: 4, message: 'I like this social network!'},
    {id: 5, message: 'Haha me too!'},
    {id: 6, message: 'Who made it?'},
    {id: 7, message: 'Some Russian developer, I think'},
    {id: 8, message: 'I want to hire him now!'},
  ],
  newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
  // debugger;
  // Switch instead of if/else if expression
  switch (action.type) {
    case updateNewMessageBody: {
      let stateCopy = {...state}
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case sendMessage: {
      let stateCopy = {...state}
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messages.push({id: 6, message: body});
      return stateCopy;
    }

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: sendMessage});
export const updateNewMessageBodyCreator = (body) => ({type: updateNewMessageBody, body: body});

export default dialogReducer;


