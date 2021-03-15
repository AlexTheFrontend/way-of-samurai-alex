import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import NumericInput from "./Components/NumericField/NumericField";
import Dialogs from "./Components/Dialogs/Dialog";

const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div classname={'appWrapperContent'}>
                <Dialogs/>
            </div>
            {/*<Profile />*/}
            <NumericInput/>

        </div>
    );
}

export default App;
