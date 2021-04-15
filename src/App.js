import React from 'react'
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/NewsMusicSettings/Music";
import News from "./Components/NewsMusicSettings/News";
import Settings from "./Components/NewsMusicSettings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import NumericInput from "./Components/NumericField/NumericField";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = (props) => {
// debugger;
  return (
      <BrowserRouter>
        <div className='appWrapper'>
          <Header/>
          <Navbar/>

          {/*For routing purposes*/}
          <div className="appWrapperContent">

            <Route path="/profile" render={() => <Profile
                store={props.store}
            />}
            />
            {/*the way to do it if defining on top*/}
            {/*with props.messages I am taking data from the level above*/}
            <Route path="/dialogs"
                   render={() => <Dialogs
                       store={props.store}
                   />
                   }/>
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
