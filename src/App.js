import React from 'react'
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NumericInput from "./Components/NumericField/NumericField";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/NewsMusicSettings/Music";
import News from "./Components/NewsMusicSettings/News";
import Settings from "./Components/NewsMusicSettings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <NumericInput/>
            </div>
        </BrowserRouter>
    );
}

export default App;
