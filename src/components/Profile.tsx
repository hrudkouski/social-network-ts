import React from 'react';
import logo from "../logo.svg";
import s from '../components/Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.AppContent}>

            <div>
                <img src={logo} className={s.AppLogo} alt="logo"/>
            </div>
            <div>
                ava + description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div className='posts'>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    );
}