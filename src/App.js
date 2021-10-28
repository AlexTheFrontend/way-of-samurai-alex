import React, {Component, Suspense} from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/NewsMusicSettings/Music";
import News from "./Components/NewsMusicSettings/News";
import Settings from "./Components/NewsMusicSettings/Settings";
import Friends from "./Components/Friends/Friends";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {initialiseApp} from "./Redux/appReducer";
import {compose} from "redux";
import {Redirect, Switch, withRouter} from "react-router";
import store from "./Redux/reduxStore";
import CatNotFound from "./Pictures/CatNotFound.jpeg";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initialiseApp();
    }

    render() {

        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Suspense fallback={"Loading... Please hold on, contect is coming"}>
                        <Switch >
                            <Route exact path="/">{this.props.initialized ? <Redirect to="/profile" /> : <Login/>}</Route>
                            {/*adding an optional URL parameter*/}
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            {/*the way to do it if defining on top*/}
                            {/*with props.messages I am taking data from the level above*/}
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            {/* Mock pages to test Router */}
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/friends" render={() => <Friends/>}/>
                            {/* "*" - is a wildcard here */}
                            <Route path='*' render={() => <div><img src={CatNotFound} /></div>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp}))(App);

const AlexSocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default AlexSocialNetworkApp
