import React from "react";
import {ContactsType, ProfileUserType} from "../../../../redux/profile_reducer";
import {Contacts} from "../ProfileContacts/ProfileContacts";
import s from "../ProfileInfo.module.css";

type ProfileDataPropsType = {
  profileUser: ProfileUserType
}

export const ProfileData = (props: ProfileDataPropsType) => {
  return <div>
    <div>
      <span className={s.titleText}>Full Name: </span>
      {props.profileUser?.fullName}
    </div>
    <div>
      <span className={s.titleText}>About Me: </span>
      {props.profileUser?.aboutMe || '...'}
    </div>
    <div>
      <span className={s.titleText}>Looking For A Job: </span>
      {props.profileUser?.lookingForAJob ? 'yes' : 'no'}
    </div>
    <div>
      <span className={s.titleText}>My professional skills: </span>
      {props.profileUser?.lookingForAJobDescription || '...'}
    </div>

    <div>
      <b>Contacts:</b>
      {Object.keys(props.profileUser.contacts).map((key) =>
          <Contacts contactTitle={key}
                    key={key}
                    contactValue={props.profileUser?.contacts[key as keyof ContactsType]}/>)}
    </div>

  </div>
}