import React, {Suspense} from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import s from '../src/App.module.css';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {FindFriends} from './components/FindFriends/FindFriends';
import HeaderContainer from './components/Header/HeaderContainer';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import store, {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";
import {LoginPage} from './components/Login/Login';
import {UsersPage} from './components/Users/UsersPage';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// const UsersPageContainer = React.lazy(() => import('./components/Users/UsersPage'));

class App extends React.Component<AppContainerPropsType> {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader/>
    return (
        <Suspense fallback={<Preloader/>}>
          <HashRouter>
            <div className={s.AppWrapper}>
              <HeaderContainer/>
              <Navbar/>
              <div className={s.AppContent}>
                <Switch>
                  <Route exact path={'/'} render={() => <Redirect to="/profile"/>}/>
                  <Route render={() => <ProfileContainer/>} path="/profile/:userID?"/>
                  <Route render={() => <DialogsContainer/>} exact path="/dialogs"/>
                  <Route render={() => <UsersPage/>} exact path="/users"/>
                  <Route component={News} path="/news"/>
                  <Route component={Music} path="/music"/>
                  <Route component={Settings} path="/settings"/>
                  <Route component={FindFriends} path="/findFriends"/>
                  <Route component={LoginPage} path="/login"/>
                  <Route path={'*'} render={() => <div>ERROR 404</div>}/>
                </Switch>
              </div>
            </div>
          </HashRouter>
        </Suspense>
    );
  }
}

type MapDispatchToPropsType = { initializeApp: () => void };
export type MapStatePropsType = ReturnType<typeof mapStateToProps>
export type AppContainerPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => {
  return {initialized: state.app.initialized};
}

const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
      initializeApp,
    }),
)(App);

export const MainApp: React.FC = () => {
  return <React.StrictMode>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </React.StrictMode>
}
