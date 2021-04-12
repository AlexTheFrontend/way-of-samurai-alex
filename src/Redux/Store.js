// Creating an object with massive of data

import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {

    profilePage: {
      posts: [
        {id: 1, message: 'Hi how are you?', likesCount: 10},
        {id: 2, message: 'It is my 1st post', likesCount: 15},
        {id: 3, message: 'Haha how are you mate?', likesCount: 18},
        {id: 4, message: 'Sweet as!', likesCount: 46},
      ],
      newPostText: 'Placeholder Alex',
    },
    messagesPage: {
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
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State has been changed - Sasha')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
    // this is a pattern for observer
  },

  // logic with Reducers
  dispatch(action) {
    // debugger;
    // Code with Reducers
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },

    // Code before the Reducers
  //   if (action.type === "ADD-POST") {
  //     let newPost = {
  //       id: 10,
  //       message: this._state.profilePage.newPostText,
  //       likesCount: 0,
  //     };
  //     this._state.profilePage.posts.push(newPost);
  //     // to clear textarea after clicking a button
  //     this._state.profilePage.newPostText = "";
  //     this._callSubscriber(this._state);
  //   } else if (action.type === "UPDATE-NEW-POST-TEXT") {
  //     this._state.profilePage.newPostText = action.newText;
  //     this._callSubscriber(this._state);
  //   } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
  //     this._state.messagesPage.newMessageBody = action.body;
  //     this._callSubscriber(this._state);
  //   } else if (action.type === "SEND-MESSAGE"){
  //     let body = this._state.messagesPage.newMessageBody;
  //     this._state.messagesPage.newMessageBody = '';
  //     this._state.messagesPage.messages.push({id: 6, message: body});
  //     this._callSubscriber(this._state);
  //   }
  // },

}


// export const updateNewPostText = (text) => {
//   return {
//     type: updateNewPost,
//     newText: text
//   }
// }
// same as:

// to display - state - in console and see what is currently logged in
// window.state = state;

export default store;
window.state = store;
// store is OOP