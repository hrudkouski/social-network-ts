import React from 'react';
import s from './ProfileInfo.module.css';
import logo from './logo.svg';

export const ProfileInfo = () => {
    return (
        <div className={s.AppContent}>
            <div>
                <img src={logo} className={s.AppLogo} alt="logo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src='https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
                    alt='avatar'/>
                <div>description</div>
            </div>
        </div>
    );
}