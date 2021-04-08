import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscribe, updateNewPostText} from "./Redux/State";

// extra function to avoid cycle dependency

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                addNewPost={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
