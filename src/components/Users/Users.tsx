import React, {FC, useEffect} from 'react';
import s from "./Users.module.css";
import {FilterType, getResponseUsers, usersActions} from "../../redux/users_reducer";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from './User/User';
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
  getCurrentPage, getFollowingInProgress,
  getPageSize,
  getTotalUserCount, getUsers, getUsersFilter
} from "../../redux/users_selectors";

type UsersPresentType = {}

export const Users: FC<UsersPresentType> = () => {

  const totalUserCount = useSelector(getTotalUserCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)
  const dispatch = useDispatch()

  const onPageChanged = (pageNumber: number) => {
    dispatch(usersActions.setCurrentPage(pageNumber))
    dispatch(getResponseUsers(pageNumber, filter))
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(getResponseUsers(1, filter))
  }

  const follow = (userID: number) => {
    dispatch(usersActions.followUser(userID))
  }

  const unFollow = (userID: number) => {
    dispatch(usersActions.unFollowUser(userID))
  }

  useEffect(() => {
    dispatch(getResponseUsers(1, filter))
  }, [filter, dispatch])

  return (
      <div className={s.wrapper}>
        <h2 style={{textAlign: 'center'}}>Users</h2>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <Paginator
            portionSize={15}
            totalItemCount={totalUserCount}
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