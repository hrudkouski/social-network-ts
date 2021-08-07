import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import s from '../src/App.module.css';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {FindFriends} from './components/FindFriends/FindFriends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import store, {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";

type MapDispatchToPropsType = {
    initializeApp: () => void
}
export type MapStatePropsType = {
    initialized: boolean
};
export type AppContainerPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    };
}

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <HashRouter>
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
            </HashRouter>
        );
    }
}

const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        initializeApp,
    }),
)(App);

export const MainApp = () => {
    return <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>
}
