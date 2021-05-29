import React from 'react'
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    if (props.userPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-10.jpg',
                    followed: false,
                    fullName: 'Dmitriy',
                    status: 'I am a bos',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoURL: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-10.jpg',
                    followed: true,
                    fullName: 'Ivan',
                    status: 'Hi! How are you',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoURL: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-10.jpg',
                    followed: false,
                    fullName: 'Mike',
                    status: 'What are you doing now?',
                    location: {city: 'Moscow', country: 'Russia'}
                }
            ]
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
                            src={el.photoURL}
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
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
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