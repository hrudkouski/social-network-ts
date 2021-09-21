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

export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
      profileUser,
      profileStatus,
      isOwner,
      updateStatus,
      savePhoto,
      saveProfile,
    }
) => {

  const [editProfile, setEditProfile] = useState<boolean>(false)

  if (!profileUser) {
    return <Preloader/>
  }

  const activateEditModeHandler = () => {
    if (isOwner) setEditProfile(true);
  }

  const onProfileFormSubmit = (formData: ProfileFormDataType) => {
    saveProfile(formData)
    setEditProfile(false);
  }

  return (
      <div className={s.profileInfo}>
        <div className={s.description}>
          <img alt={'avatar'}
               src={profileUser.photos.large || avatarPhoto}
          />

          <div>
            <ProfileStatusWithHooks
                isOwner={isOwner}
                updateStatus={updateStatus}
                profileStatus={profileStatus}
            />

            {isOwner && !editProfile && <button
              onClick={activateEditModeHandler}>
              Edit profile
            </button>}

            {editProfile
                ? <ProfileDataForm
                    onSubmit={onProfileFormSubmit}
                    initialValues={profileUser}
                    savePhoto={savePhoto}
                    setEditProfile={setEditProfile}
                    profileUser={profileUser}
                />
                : <ProfileData profileUser={profileUser}/>}
          </div>
        </div>
      </div>
  );
}