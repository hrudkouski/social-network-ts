import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../../logo.svg";
import s from './Header.module.css'

type HeaderPropsType = {
    login: string
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = ({login, ...props}) => {

    return (
        <header className={s.AppHeader}>
            <img src={logo} className={s.AppLogo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <span className={s.loginTitle}>Username: </span>
                        <span className={s.userName}>{login}</span>
                    </div>
                    : <NavLink to={'/login'}>
                        Please login to continue
                    </NavLink>
                }
            </div>
        </header>
    );
}