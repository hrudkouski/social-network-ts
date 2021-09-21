import React from "react";
import {ContactsType, ProfileUserType} from "../../../../redux/profile_reducer";
import {ProfileContacts} from "../ProfileContacts/ProfileContacts";
import s from "../ProfileInfo.module.css";

type ProfileDataPropsType = {
  profileUser: ProfileUserType
}

export const ProfileData: React.FC<ProfileDataPropsType> = (
    {profileUser,}
) => {
  return <div>
    <div>
      <span className={s.titleText}>Full Name: </span>
      {profileUser.fullName}
    </div>
    <div>
      <span className={s.titleText}>About Me: </span>
      {profileUser.aboutMe || '...'}
    </div>
    <div>
      <span className={s.titleText}>Looking For A Job: </span>
      {profileUser.lookingForAJob ? 'yes' : 'no'}
    </div>
    <div>
      <span className={s.titleText}>My professional skills: </span>
      {profileUser.lookingForAJobDescription || '...'}
    </div>

    <div>
      <b>Contacts:</b>
      {Object
          .keys(profileUser.contacts)
          .map((key) =>
              <ProfileContacts contactTitle={key}
                               key={key}
                               contactValue={profileUser.contacts[key as keyof ContactsType]}/>)}
    </div>
  </div>
}