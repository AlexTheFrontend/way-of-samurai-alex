import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducersPack = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducersPack);

window.store = store;

export default store;