import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/profile_reducer";
import {Preloader} from '../../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm, ProfileFormDataType} from './ProfileDataForm/ProfileDataForm';
import avatarPhoto from "../../../assets/images/avatar.png";

export type ProfileInfoType = {
  profileUser: ProfileUserType | null
  profileStatus: string
  isOwner: boolean
  updateStatus: (newStatus: string) => void
  savePhoto: (photo: File) => void
  saveProfile: (formData: ProfileFormDataType) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {

  const [editProfile, setEditProfile] = useState<boolean>(false)

  if (!props.profileUser) {
    return <Preloader/>
  }

  const activateEditModeHandler = () => {
    if (props.isOwner) setEditProfile(true);
  }

  const onProfileFormSubmit = (formData: ProfileFormDataType) => {
    props.saveProfile(formData)
    setEditProfile(false);
  }

  return (
      <div className={s.profileInfo}>
        <div className={s.description}>
          <img alt={'avatar'}
               src={props.profileUser.photos.large || avatarPhoto}
          />

          <div>
            <ProfileStatusWithHooks
                isOwner={props.isOwner}
                updateStatus={props.updateStatus}
                profileStatus={props.profileStatus}
            />

            {props.isOwner && !editProfile && <button
              onClick={activateEditModeHandler}>
              Edit profile
            </button>}

            {editProfile
                ? <ProfileDataForm
                    onSubmit={onProfileFormSubmit}
                    initialValues={props.profileUser}
                    savePhoto={props.savePhoto}
                    setEditProfile={setEditProfile}
                    profileUser={props.profileUser}
                />
                : <ProfileData profileUser={props.profileUser}/>}
          </div>
        </div>
      </div>
  );
}