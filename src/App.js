import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import NumericInput from './components/NumericField/NumericField'
import Profile from './components/Profile/Profile'

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
