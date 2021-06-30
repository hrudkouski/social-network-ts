import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileUserType} from "../../redux/profile_reducer";

export type ProfileType = {
    profileUser: ProfileUserType | null
    profileStatus: string
    updateStatus: (newStatus: string) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.AppContent}>
            <ProfileInfo
                updateStatus={props.updateStatus}
                profileStatus={props.profileStatus}
                profileUser={props.profileUser}/>
            <MyPostsContainer/>
        </div>
    );
}

