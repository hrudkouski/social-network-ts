import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from '../src/App.module.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {FindFriends} from './components/FindFriends/FindFriends';
import {RootStateType} from "./redux/state";

type AppPropsType = {
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
    state: RootStateType
    addMessage: () => void
    updateTextMessage: (newMessage: string) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.AppContent}>
                    <Route render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            updateNewPostText={props.updateNewPostText}
                            addPost={props.addPost}
                        />}
                           exact path="/profile"/>
                    <Route render={() =>
                        <Dialogs
                            addMessage={props.addMessage}
                            updateTextMessage={props.updateTextMessage}
                            dialogsPage={props.state.dialogsPage}
                        />}
                           exact path="/dialogs"/>
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
