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
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {StoreType} from "./redux/redux-store";
import {ActionsTypes, RootStateType} from "./redux/store";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store:  StoreType
}

function App({state, dispatch, ...props}: AppPropsType) {

    return (
        <BrowserRouter>
            <div className={s.AppWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.AppContent}>
                    <Route render={() =>
                        <Profile
                            // profilePage={state.profilePage}
                            // dispatch={dispatch}
                            store={props.store}
                        />}
                           exact path="/profile"/>
                    <Route render={() =>
                        <DialogsContainer
                            // dispatch={dispatch}
                            // dialogsPage={state.dialogsPage}
                            store={props.store}
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
