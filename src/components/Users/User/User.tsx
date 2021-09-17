import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import avatarPhoto from "../../../assets/images/avatar.png";
import {UserType} from "../../../redux/users_reducer";

type UserPropsType = {
  user: UserType
  followingInProgress: Array<number>
  unFollow: (userID: number) => void
  follow: (userID: number) => void
}
export const User: React.FC<UserPropsType> = (
    {
      user,
      followingInProgress,
      unFollow,
      follow
    }
) => {

  return (
      <div style={{marginBottom: '15px'}}>
        <>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                  className={s.photo}
                  src={user.photos.small !== null
                      ? user.photos.small
                      : avatarPhoto}
                  alt="avatar"
              />
            </NavLink>
          </div>

          <div className={s.button}>
            {user.followed
                ? <button
                    disabled={followingInProgress
                        .some(id => id === user.id)}
                    className={s.unFollow}
                    onClick={() => {
                      unFollow(user.id)
                    }}
                >UnFollow</button>
                : <button
                    disabled={followingInProgress
                        .some(id => id === user.id)}
                    className={s.follow}
                    onClick={() => {
                      follow(user.id)
                    }}
                >Follow</button>}
          </div>
        </>

        <>
          <div>nickName: {user.name}</div>
          <div>status: {user.status || '⛔'}</div>
        </>
      </div>)
}