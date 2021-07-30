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
        <div>
                <span>
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
                    <div>
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
                </span>
            <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
            <span>
                        <div>el.location.country</div>
                        <div>el.location.city</div>
                    </span>
        </div>)
}