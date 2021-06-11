import React from 'react';
import s from "./Users.module.css";
import avatarPhoto from "../../assets/images/avatar.png";
import {UsersPageType} from "../../redux/users_reducer";
import { NavLink } from 'react-router-dom';

type UsersPresentType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    userPage: UsersPageType
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
}

export const Users = (props: UsersPresentType) => {

    // const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    const pages = []
    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }

    return (
        <div>

            <div>
                {
                    pages.map((el, index) => {
                        const setCurrentPageHandler = () => props.onPageChanged(el);
                        return (
                            <span
                                onClick={setCurrentPageHandler}
                                className={`${el === props.currentPage
                                    ? s.selectedPage
                                    : s.page} ${s.page}` }
                                key={index}>
                                {el}
                            </span>
                        )
                    })
                }
            </div>

            {
                props.userPage.users.map((el) => <div key={el.id}>
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
                                ? <button onClick={() => {
                                    props.unFollowUser(el.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.followUser(el.id)
                                }}>Follow</button>}
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
                </div>)
            }
        </div>
    )
}

