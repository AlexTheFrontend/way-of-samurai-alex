import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import store from "./Redux/reduxStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";



  ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
      document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
