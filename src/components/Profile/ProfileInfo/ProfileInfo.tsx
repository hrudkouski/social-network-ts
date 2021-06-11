import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/profile_reducer";
import {Preloader} from '../../../common/Preloader/Preloader';

export type ProfileInfoType = {
    profileUser: ProfileUserType | null
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profileUser) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.description}>
                <img alt={'avatar'} src={props.profileUser.photos.large}/>
                <>Full Name: {props.profileUser.fullName}</>
                <div className={s.aboutMe}>About Me: {props.profileUser.aboutMe}</div>
                <div>Looking For A Job Description: {props.profileUser.lookingForAJobDescription}</div>
                <div>Contacts:
                    <nav>{props.profileUser.contacts.twitter}</nav>
                    <div>{props.profileUser.contacts.instagram}</div>
                </div>
            </div>
        </div>
    );
}