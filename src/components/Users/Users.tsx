import React from 'react';
import s from "./Users.module.css";
import avatarPhoto from "../../assets/images/avatar.png";
import {UsersPageType} from "../../redux/users_reducer";
import {NavLink} from 'react-router-dom';
import {usersApi} from "../../api/api";

type UsersPresentType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    userPage: UsersPageType
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    toggleFollowingProgress: (progress: boolean, userID: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: UsersPresentType) => {

    // const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    const pages = []
    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }

    return (
        <div className={s.wrapper}>
            <div>
                {
                    pages.map((el, index) => {
                        const setCurrentPageHandler = () => props.onPageChanged(el);
                        return (
                            <span
                                onClick={setCurrentPageHandler}
                                className={`${el === props.currentPage
                                    ? s.selectedPage
                                    : s.page} ${s.page}`}
                                key={index}>
                                {el}
                            </span>
                        )
                    })
                }
            </div>
            {
                props.userPage.users.map((el) => <div
                    className={s.userProfile} key={el.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + el.id}>
                            <img
                                className={s.photo}
                                src={el.photos.small !== null
                                    ? el.photos.small
                                    : avatarPhoto}
                                alt="avatar"
                            />
                        </NavLink>
                    </div>
                    <div>
                            {el.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === el.id)}
                                    className={s.unFollow}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, el.id);
                                        usersApi.unFollow(el.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unFollowUser(el.id)
                                                }
                                                props.toggleFollowingProgress(false, el.id);
                                            })
                                    }}
                                >UnFollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === el.id)}
                                    className={s.follow}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, el.id);
                                        usersApi.follow(el.id)
                                            .then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.followUser(el.id)
                                                    }
                                                    props.toggleFollowingProgress(false, el.id);
                                                }
                                            )
                                    }}
                                >Follow</button>}
                    </div>
                </span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>el.location.country</div>
                        <div>el.location.city</div>
                    </span>
                </div>)
            }
        </div>
    )
}

