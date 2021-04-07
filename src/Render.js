import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/State";

// extra function to avoid cycle dependency

export let rerenderEntireTree = (state) => {

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
