import React from 'react'
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NumericInput from "./Components/NumericField/NumericField";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <div className='appWrapper'>
        <Header />
        <Navbar />
        <Profile />
        <NumericInput />

    </div>
  );
}

export default App;
