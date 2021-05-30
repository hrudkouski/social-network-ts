import React from 'react'
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import avatarPhoto from '../../assets/images/avatar.png'

export const Users = (props: UsersPropsType) => {
    if (props.userPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            }
        )
    }

    const users = props.userPage.users.map(el => {

        const followCallback = () => {
            props.followUser(el.id)
        }
        const unFollowCallback = () => {
            props.unFollowUser(el.id)
        }

        return (
            <div key={el.id}>
                <span>
                    <div>
                        <img
                            className={s.photo}
                            src={el.photos.small !== null ? el.photos.small : avatarPhoto}
                            alt="avatar"
                        />
                    </div>
                    <div>
                            {el.followed
                                ? <button onClick={unFollowCallback}>UnFollow</button>
                                : <button onClick={followCallback}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>el.location.country</div>
                        <div>el.location.city</div>
                    </span>
                </span>
            </div>
        )
    })

    return (
        <div className={s.dialogs}>
            {users}
        </div>
    )
}