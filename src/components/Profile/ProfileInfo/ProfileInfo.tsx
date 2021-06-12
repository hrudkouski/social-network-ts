import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/profile_reducer";
import {Preloader} from '../../../common/Preloader/Preloader';
import gitHubeSVG from '../../../assets/icons/github.png'

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
                <div>
                    <span className={s.titleText}>Full Name: </span>
                    {props.profileUser.fullName}
                </div>
                <div>
                    <span className={s.titleText}>About Me: </span>
                    {props.profileUser.aboutMe}
                </div>
                <div className={s.contactsIcons}>
                    <span className={s.titleText}>My contacts: </span>
                    <a target="blank" href='https://github.com/'>
                        <img src={gitHubeSVG} alt={props.profileUser.contacts.github}/>
                    </a>
                </div>
                <div>Looking For A Job Description: {props.profileUser.lookingForAJobDescription}</div>
                <div>Contacts:
                    <nav>{props.profileUser.contacts.twitter}</nav>
                    <div>{props.profileUser.contacts.instagram}</div>
                </div>
            </div>
        </div>
    );
}