import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: any
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.AppContent}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

