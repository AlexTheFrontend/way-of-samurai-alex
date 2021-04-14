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
import Friends from "./Components/Friends/Friends";
// import { useRouter } from 'next/router'
// import Link from 'next/link'


const App = (props) => {
// debugger;
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>

                {/*For routing purposes*/}
                <div className="appWrapperContent">
                    {/* Alternative way which is not going to be used*/}
                    {/*<Route path="/profile" component={Profile}/>*/}
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/music" component={Music}/>*/}
                    {/*<Route path="/settings" component={Settings}/>*/}

                    <Route path="/profile" render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                        // newPost={props.newPostText}
                    />}
                    />
                    {/*the way to do it if defining on top*/}
                    {/*with props.messages I am taking data from the level above*/}
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               // dialogs={props.state.messagesPage.dialogs}
                               // messages={props.state.messagesPage.messages}
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
