import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducersPack = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducersPack);

window.store = store;

export default store;