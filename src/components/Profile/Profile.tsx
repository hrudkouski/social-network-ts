import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.AppContent}>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    );
}

