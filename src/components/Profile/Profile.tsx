import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.AppContent}>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    );
}

