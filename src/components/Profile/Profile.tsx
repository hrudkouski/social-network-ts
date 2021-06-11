import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileUserType} from "../../redux/profile_reducer";

export type ProfileType = {
    profileUser: ProfileUserType | null
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.AppContent}>
            <ProfileInfo profileUser={props.profileUser}/>
            <MyPostsContainer/>
        </div>
    );
}

