import React from 'react'
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NumericInput from "./Components/NumericField/NumericField";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className='appWrapper'>
        <Header />
        <Navbar />
        <Dialogs name='hello'/>
        {/*<Profile />*/}
        <NumericInput />

    </div>
  );
}

export default App;
