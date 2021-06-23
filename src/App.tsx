import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from '../src/App.module.css'
import {Navbar} from "./components/Navbar/Navbar";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {FindFriends} from './components/FindFriends/FindFriends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainerApi";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from "./components/Login/Login";

function App() {

    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.AppContent}>
                    <Route render={() =>
                        <ProfileContainer/>}
                           path="/profile/:userID?"
                    />
                    <Route render={() =>
                        <DialogsContainer/>}
                           exact path="/dialogs"
                    />
                    <Route render={() =>
                        <UsersContainer/>}
                           exact path="/users"
                    />
                    <Route component={News} path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>
                    <Route component={FindFriends} path="/findFriends"/>
                    <Route component={Login} path="/login"/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
