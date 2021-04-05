import React from 'react';
import logo from "../logo.svg";
import s from '../components/Header.module.css'

export const Header = () => {
    return (
        <header className={s.AppHeader}>
            <img src={logo} className={s.AppLogo} alt="logo"/>
        </header>
    );
}