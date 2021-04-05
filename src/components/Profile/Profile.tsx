import React from 'react';
import logo from "../../logo.svg";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.AppContent}>
            <div>
                <img src={logo} className={s.AppLogo} alt="logo"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}