import {AppThunk, GetActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/objects-helpers/objects-helpers";
import {PhotoType} from "../types/types";
import {usersApi} from "../api/usersApi";
import {ApiResponseType} from "../api/api";

//Actions
enum Users {
  FOLLOW = 'social-network-ts/users_reducer/FOLLOW',
  UNFOLLOW = 'social-network-ts/users_reducer/UNFOLLOW',
  SET_USERS = 'social-network-ts/users_reducer/SET_USERS',
  SET_CURRENT_PAGE = 'social-network-ts/users_reducer/SET_CURRENT_PAGE',
  SET_FILTER = 'social-network-ts/users_reducer/SET_FILTER',
  SET_TOTAL_USERS_COUNT = 'social-network-ts/users_reducer/SET_TOTAL_USERS_COUNT',
  TOGGLE_IS_FETCHING = 'social-network-ts/users_reducer/TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network-ts/users_reducer/TOGGLE_IS_FOLLOWING_PROGRESS',
}

//Initial State
const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUserCount: 100,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
  filter: {term: '', friend: null as null | boolean},
};

//Reducer
export const usersReducer = (state = initialState, action: UsersActionTypes): UsersPageInitialStateType => {
  switch (action.type) {
    case Users.FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      }
    case Users.UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      }
    case Users.SET_USERS:
      return {...state, users: [...action.users]}
    case Users.SET_CURRENT_PAGE:
      return {...state, currentPage: action.page}
    case Users.SET_FILTER:
      return {...state, filter: action.payload}
    case Users.SET_TOTAL_USERS_COUNT:
      return {...state, totalUserCount: action.totalCount}
    case Users.TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case Users.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.progress
            ? [...state.followingInProgress, action.userID]
            : state.followingInProgress.filter(id => id !== action.userID)
      }
    default:
      return state;
  }
}

//Action Creators
export const usersActions = {
  followUser: (userID: number) => ({type: Users.FOLLOW, userID} as const),
  unFollowUser: (userID: number) => ({type: Users.UNFOLLOW, userID} as const),
  setUsers: (users: Array<UserType>) => ({
    type: Users.SET_USERS, users
  } as const),
  setCurrentPage: (page: number) => ({
    type: Users.SET_CURRENT_PAGE, page
  } as const),
  setFilter: (filter: FilterType) => ({
    type: Users.SET_FILTER, payload: filter
  } as const),
  setTotalUsersCount: (totalCount: number) => ({
    type: Users.SET_TOTAL_USERS_COUNT, totalCount
  } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: Users.TOGGLE_IS_FETCHING, isFetching
  } as const),
  toggleFollowingProgress: (progress: boolean, userID: number) => ({
    type: Users.TOGGLE_IS_FOLLOWING_PROGRESS, progress, userID,
  } as const),
}

//ThunkCreator
export const getResponseUsers = (currentPage: number, filter: FilterType): AppThunk => {
  return async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    dispatch(usersActions.setCurrentPage(currentPage));
    dispatch(usersActions.setFilter(filter));
    let res = await usersApi.getUsers(currentPage, filter.term, filter.friend)
    dispatch(usersActions.toggleIsFetching(false));
    dispatch(usersActions.setUsers(res.items));
    dispatch(usersActions.setTotalUsersCount(res.totalCount));
  }
}

const _followUnFollowFlow = async (dispatch: Dispatch<UsersActionTypes>,
                                   userID: number,
                                   apiMethod: (userID: number) => Promise<ApiResponseType>,
                                   actionCreator: (userID: number) => UsersActionTypes) => {
  dispatch(usersActions.toggleFollowingProgress(true, userID));
  let response = await apiMethod(userID);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userID))
  }
  dispatch(usersActions.toggleFollowingProgress(false, userID));
};

export const follow = (userID: number): AppThunk => {
  return async (dispatch) => {
    await _followUnFollowFlow(dispatch, userID, usersApi.follow.bind(usersApi), usersActions.followUser);
  }
}

export const unFollow = (userID: number): AppThunk => {
  return async (dispatch) => {
    await _followUnFollowFlow(dispatch, userID, usersApi.unFollow.bind(usersApi), usersActions.unFollowUser);
  }
}

//Types
export type UserType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: PhotoType
  status: string
  followed: boolean
}
export type FilterType = typeof initialState.filter;
export type UsersPageInitialStateType = typeof initialState
export type UsersActionTypes = GetActionsTypes<typeof usersActions>