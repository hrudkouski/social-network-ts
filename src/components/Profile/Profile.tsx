import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileUserType} from "../../redux/profile_reducer";
import {ProfileFormDataType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";

export type ProfileType = {
  profileUser: ProfileUserType | null
  profileStatus: string
  updateStatus: (newStatus: string) => void
  isOwner: boolean
  savePhoto: (photo: File) => void
  saveProfile: (formData: ProfileFormDataType) => void
}

export const Profile = (props: ProfileType) => {
  return (
      <div className={s.AppContent}>
        <ProfileInfo
            saveProfile={props.saveProfile}
            savePhoto={props.savePhoto}
            isOwner={props.isOwner}
            updateStatus={props.updateStatus}
            profileStatus={props.profileStatus}
            profileUser={props.profileUser}/>
        <MyPostsContainer/>
      </div>
  );
}

