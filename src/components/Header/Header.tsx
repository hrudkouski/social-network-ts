import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../../logo.svg";
import s from './Header.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {Avatar, Button, Col, Layout, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectIsFetching, selectLogin} from "../../redux/header_selectors";
import {logout} from "../../redux/auth_reducer";

type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = () => {

  const login = useSelector(selectLogin)
  const isAuth = useSelector(selectIsAuth)
  const isFetching = useSelector(selectIsFetching)
  const dispatch = useDispatch()

  const logoutCallback = () => dispatch(logout())

  if (isFetching) {
    return <Preloader/>
  }

  const {Header} = Layout;

  return (<Header className="header">
        <div className="logo"/>
        <Row>
          <Col span={18}>
            <img src={logo} className={s.AppLogo} alt="logo"/>
          </Col>
          <Col span={6}>
            {isAuth
                ? <div>
                  <Avatar src="https://joeschmoe.io/api/v1/random"/>
                  <span className={s.loginTitle}>User: </span>
                  <span className={s.userName}>{login}</span>
                  <Button
                      style={{marginLeft: '10px'}}
                      onClick={logoutCallback}>
                    LogOut
                  </Button>
                </div>
                : <NavLink to={'/login'}>
                  Please login to continue
                </NavLink>}
          </Col>
        </Row>
      </Header>
  );
}