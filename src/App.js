import React from 'react'
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/NewsMusicSettings/Music";
import News from "./Components/NewsMusicSettings/News";
import Settings from "./Components/NewsMusicSettings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import NumericInput from "./Components/NumericField/NumericField";
// import Dialogs from "./Components/Dialogs/Dialogs";


const App = (props) => {
// debugger;
  return (
      <BrowserRouter>
        <div className='appWrapper'>
          <Header/>
          <Navbar/>

          {/*For routing purposes*/}
          <div className="appWrapperContent">

            <Route path="/profile" render={() => <ProfileContainer/>}
            />
            {/*the way to do it if defining on top*/}
            {/*with props.messages I am taking data from the level above*/}
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/users" render={() => <UsersContainer />}/>

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
