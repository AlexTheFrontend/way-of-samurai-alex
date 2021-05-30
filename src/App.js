import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/NewsMusicSettings/Music";
import News from "./Components/NewsMusicSettings/News";
import Settings from "./Components/NewsMusicSettings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


// import NumericInput from "./Components/NumericField/NumericField";

const App = (props) => {
// debugger;
  return (
      <BrowserRouter>
        <div className='appWrapper'>
          <HeaderContainer/>
          <Navbar/>

          {/*For routing purposes*/}
          <div className="appWrapperContent">
            {/*adding an optional URL parameter*/}
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
            {/*the way to do it if defining on top*/}
            {/*with props.messages I am taking data from the level above*/}
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/login" render={() => <Login />}/>

            {/* To be used later on */}
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
            <Route path="/friends" render={() => <Friends/>}/>
          </div>
          {/*for testing purposes*/}
          {/*<NumericInput/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
