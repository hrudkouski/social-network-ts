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
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";

type UsersPresentType = {}
type QueryParamsType = {
  term?: string
  friend?: string
  page?: string
}

export const Users: FC<UsersPresentType> = () => {
  const totalUserCount = useSelector(getTotalUserCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)

  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

    let actualPage = currentPage;
    let actualFilter = filter;

    if (!!parsed.page) {
      actualPage = Number(parsed.page)
    }
    if (!!parsed.term) {
      actualFilter = {...actualFilter, term: parsed.term as string}
    }

    switch (parsed.friend) {
      case 'null':
        actualFilter = {...actualFilter, friend: null}
        break;
      case 'true':
        actualFilter = {...actualFilter, friend: true}
        break;
      case 'false':
        actualFilter = {...actualFilter, friend: false}
        break;
    }

    dispatch(getResponseUsers(actualPage, actualFilter))
  }, [])

  useEffect(() => {
    const query: QueryParamsType = {}
    if (!!filter.term) query.term = filter.term
    if (filter.friend) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)

    history.push({
      pathname: '/users',
      search: queryString.stringify(query)
    })
  }, [filter, currentPage, history])

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