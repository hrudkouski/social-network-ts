import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from '../src/App.module.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {FindFriends} from './components/FindFriends/FindFriends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainerApi";

function App() {

    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.AppContent}>
                    <Route render={() =>
                        <Profile/>}
                           exact path="/profile"
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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
