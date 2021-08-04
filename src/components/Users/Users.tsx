import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users_reducer";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from './User/User';

type UsersPresentType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    followingInProgress: Array<number>
    unFollow: (userID: number) => void
    follow: (userID: number) => void
}
export const Users: React.FC<UsersPresentType> = (
    {
        currentPage,
        onPageChanged,
        users,
        followingInProgress,
        follow,
        unFollow,
        totalUserCount,
        pageSize
    }
) => {

    return (
        <div className={s.wrapper}>
            <Paginator
                totalUserCount={totalUserCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>

            {
                users.map((el, i) => <User
                    key={i}
                    followingInProgress={followingInProgress}
                    unFollow={unFollow}
                    follow={follow}
                    user={el}/>
                )
            }
        </div>
    )
}