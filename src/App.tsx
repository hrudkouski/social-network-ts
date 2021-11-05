import React, {Suspense} from 'react';
import {HashRouter, Link, Redirect, Route, Switch} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {FindFriends} from './components/FindFriends/FindFriends';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import store, {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";
import {LoginPage} from './components/Login/Login';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Content, Sider, Footer} = Layout;


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersPage = React.lazy(() => import('./components/Users/UsersPage'));

class App extends React.Component<AppContainerPropsType> {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) return <Preloader/>
    return (
        <Layout>
          <Header/>
          <Layout style={{padding: '0 24px 24px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Layout>
          <Layout>
            <Sider width={250} className="site-layout-background">
              <Menu
                  mode='inline'
                  defaultSelectedKeys={['1']}
                  style={{height: '100%', borderRight: 0}}>
                <SubMenu key="Profile" icon={<UserOutlined/>} title="My Profile">
                  <Menu.Item key="1">
                    <Link to={"/profile"}>Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to={"/dialogs"}>Messages</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to={"/news"}>News</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to={"/music"}>Music</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="Developers" icon={<LaptopOutlined/>} title="Developers">
                  <Menu.Item key="5">
                    <Link to={"/users"}>Users</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="Settings" icon={<NotificationOutlined/>} title="Settings">
                  <Menu.Item key="6">
                    <Link to={"/settings"}>Settings</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content
                className="site-layout-background"
                style={{padding: 24, margin: 0, minHeight: 280,}}>
              <Suspense fallback={<Preloader/>}>
                <Switch>
                  <Route exact path={'/'} render={() => <Redirect to="/profile"/>}/>
                  <Route render={() => <ProfileContainer/>} path="/profile/:userID?"/>
                  <Route render={() => <DialogsContainer/>} exact path="/dialogs"/>
                  <Route render={() => <UsersPage/>} path='/users'/>
                  <Route component={News} path="/news"/>
                  <Route component={Music} path="/music"/>
                  <Route component={Settings} path="/settings"/>
                  <Route component={FindFriends} path="/findFriends"/>
                  <Route component={LoginPage} path="/login"/>
                  <Route path={'*'} render={() => <div>ERROR 404 </div>}/>
                </Switch>
              </Suspense>
            </Content>
          </Layout>
          <Footer style={{textAlign: 'center'}}>Social Network ©2021 Created with ❤ by
            Mikita Grudkowski</Footer>
        </Layout>
    )
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
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
}
