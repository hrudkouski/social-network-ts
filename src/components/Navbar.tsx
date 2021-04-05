import React from 'react';
import s from '../components/Navbar.module.css'

export const Navbar = () => {

    return (
        <nav className={s.AppNav}>
            <div className={s.item}>
                <a href="https://www.google.com/">Profile</a>
            </div>
            <div className={s.item}>
                <a href="https://www.google.com/">Messages</a>
            </div>
            <div className={s.item}>
                <a href="https://www.google.com/">News</a>
            </div>
            <div className={s.item}>
                <a href="https://www.google.com/">Music</a>
            </div>
            <div className={s.item}>
                <a href="https://www.google.com/">Settings</a>
            </div>
            <div className={s.item}>
                <a href="https://www.google.com/">Find friends</a>
            </div>
        </nav>
    );
}