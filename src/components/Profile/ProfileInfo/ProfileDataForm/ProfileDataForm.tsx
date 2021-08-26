import React, {ChangeEvent} from "react";
import s from '../ProfileInfo.module.css';
import {
  createField,
  Input,
  Textarea
} from "../../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {ProfileUserType} from "../../../../redux/profile_reducer";

export type ProfileFormDataType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: string
}

type ProfileDataFormPropsType = {
  profileUser: ProfileUserType
  savePhoto: (photo: File) => void
  setEditProfile: (editProfile: boolean) => void
}

export const ProfileDataForm = reduxForm<ProfileUserType, ProfileDataFormPropsType>(
    {form: 'edit_profile'})((
    {
      profileUser,
      setEditProfile,
      error,
      savePhoto,
      handleSubmit
    }
) => {

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <label className={s.changeAvatar}>
          <b>Change avatar:</b>
          <div>
            <input type="file"
                   placeholder={'Change avatar'}
                   onChange={onMainPhotoSelected}/>
          </div>
        </label>

        <div>
          <span className={s.titleText}>About Me: </span>
          {createField('aboutMe', 'About Me', Input, [])}
        </div>

        <div>
          <span className={s.titleText}>Full Name: </span>
          {createField('fullName', 'Full name', Input, [])}
        </div>

        <div>
          <span className={s.titleText}>My professional skills: </span>
          {createField('lookingForAJobDescription', 'My professional skills', Textarea, [])}
        </div>

        <div>
          <span className={s.titleText}>Looking For A Job: </span>
          {createField('lookingForAJob', '', Input, [], {type: 'checkbox'})}
        </div>

        <div>
          <b>Contacts:</b>
          {Object.keys(profileUser.contacts).map((key) => {
                return (
                    <div key={key}>
                      <b>{key} : {createField('contacts.' + key, key, Input, [])}</b>
                    </div>
                )
              }
          )}
        </div>

        <button style={{backgroundColor: 'green'}} type={'submit'}>Save</button>
        <button style={{backgroundColor: 'red'}} type={'button'}
                onClick={() => setEditProfile(false)}> Cancel
        </button>

        {error && (
            <span style={{color: 'red'}}>
                {error}
            </span>
        )}
      </form>
  )
})

