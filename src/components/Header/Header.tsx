import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../../logo.svg";
import s from './Header.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

type HeaderPropsType = {
  login: string | null
  isAuth: boolean
  logout: () => void
  isFetching: boolean
}

export const Header: React.FC<HeaderPropsType> = (
    {
      login,
      isFetching,
      isAuth,
      logout
    }
) => {

  if (isFetching) {
    return <Preloader/>
  }

  return (
      <header className={s.AppHeader}>
        <img src={logo} className={s.AppLogo} alt="logo"/>
        <div className={s.loginBlock}>
          {isAuth
              ? <div>
                <span className={s.loginTitle}>Username: </span>
                <span className={s.userName}>{login}</span>
                <button style={{marginLeft: '15px'}} onClick={logout}>LogOut</button>
              </div>
              : <NavLink to={'/login'}>
                Please login to continue
              </NavLink>
          }
        </div>
      </header>
  );
}