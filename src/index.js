import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// storing data for practice purposes

let posts = [
    {id: 1, message: 'Hi how are you?', likesCount: 10},
    {id: 2, message: 'It is my 1st post', likesCount: 15},
    {id: 2, message: 'Haha how are you mate?', likesCount: 18},
    {id: 2, message: 'Sweet as!', likesCount: 46},
]

let dialogs = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Dennis'},
    {id: 3, name: 'Roman'},
    {id: 4, name: 'Nadya'},
    {id: 5, name: 'Dima'},
    {id: 6, name: 'Julia'},
];

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Sup!'},
    {id: 3, message: 'Bruuuuuuuu'},
    {id: 4, message: 'Bruuuuuuuueeeeeee'},
    {id: 5, message: 'Bruuuuuuuueeeeeeadsadade'},
    {id: 6, message: 'Bruuuuuuuueeeeeeasdasdasdasdade'},
    {id: 7, message: 'Blyyyyaaaat'},
    {id: 8, message: 'Dennis'},
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
