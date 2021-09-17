import {AppThunk} from "./redux-store";
import {usersApi} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/objects-helpers/objects-helpers";
import {PhotoType} from "../types/types";

//Actions
enum Users {
  FOLLOW = 'social-network-ts/users_reducer/FOLLOW',
  UNFOLLOW = 'social-network-ts/users_reducer/UNFOLLOW',
  SET_USERS = 'social-network-ts/users_reducer/SET_USERS',
  SET_CURRENT_PAGE = 'social-network-ts/users_reducer/SET_CURRENT_PAGE',
  SET_TOTAL_USERS_COUNT = 'social-network-ts/users_reducer/SET_TOTAL_USERS_COUNT',
  TOGGLE_IS_FETCHING = 'social-network-ts/users_reducer/TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network-ts/users_reducer/TOGGLE_IS_FOLLOWING_PROGRESS',
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
export type UsersPageInitialStateType = {
  users: Array<UserType>
  pageSize: number
  totalUserCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}
export type FollowAT = ReturnType<typeof followUser>
export type UnFollowAT = ReturnType<typeof unFollowUser>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>
export type UsersActionTypes =
    | FollowAT
    | UnFollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleFollowingProgressAT
    | ToggleIsFetchingAT;

//Initial State
const initialState: UsersPageInitialStateType = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUserCount: 100,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [], //array of users ids
};

//Reducer
export const usersReducer = (state = initialState, action: UsersActionTypes): UsersPageInitialStateType => {
  switch (action.type) {
    case Users.FOLLOW:
      return {
        ...state,
        // users: state.users.map(el => el.id === action.userID
        //     ? {...el, followed: true}
        //     : el)
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      }
    case Users.UNFOLLOW:
      return {
        ...state,
        // users: state.users.map(el => el.id === action.userID
        //     ? {...el, followed: false}
        //     : el)
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      }
    case Users.SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case Users.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }
    case Users.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUserCount: action.totalCount,
      }
    case Users.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
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
export const followUser = (userID: number) => ({type: Users.FOLLOW, userID} as const)

export const unFollowUser = (userID: number) => ({type: Users.UNFOLLOW, userID} as const)

export const setUsers = (users: Array<UserType>) => ({
  type: Users.SET_USERS,
  users
} as const)

export const setCurrentPage = (page: number) => ({
  type: Users.SET_CURRENT_PAGE,
  page
} as const)

export const setTotalUsersCount = (totalCount: number) => ({
  type: Users.SET_TOTAL_USERS_COUNT,
  totalCount
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
  type: Users.TOGGLE_IS_FETCHING,
  isFetching
} as const)

export const toggleFollowingProgress = (progress: boolean, userID: number) => ({
  type: Users.TOGGLE_IS_FOLLOWING_PROGRESS,
  progress,
  userID,
} as const)

//ThunkCreator
export const getResponseUsers = (currentPage: number): AppThunk => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersApi.getUsers(currentPage)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}

const _followUnFollowFlow = async (dispatch: Dispatch, userID: number, apiMethod: any, actionCreator: (userID: number) => FollowAT | UnFollowAT) => {
  dispatch(toggleFollowingProgress(true, userID));
  let data = await apiMethod(userID);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userID))
  }
  dispatch(toggleFollowingProgress(false, userID));
};

export const follow = (userID: number): AppThunk => {
  return async (dispatch) => {
    await _followUnFollowFlow(dispatch, userID, usersApi.follow, followUser);
  }
}

export const unFollow = (userID: number): AppThunk => {
  return async (dispatch) => {
    await _followUnFollowFlow(dispatch, userID, usersApi.unFollow, unFollowUser);
  }
}