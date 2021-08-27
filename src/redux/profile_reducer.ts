import {AppDispatch, AppStateType} from "./redux-store";
import {profileApi} from "../api/api";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {toggleIsFetching} from "./auth_reducer";
import {stopSubmit} from "redux-form";

// Actions
const ADD_POST = 'social-network-ts/profile_reducer/ADD_POST';
const SET_USER_PROFILE = 'social-network-ts/profile_reducer/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'social-network-ts/profile_reducer/SET_PROFILE_STATUS';
const UPDATE_PROFILE_STATUS = 'social-network-ts/profile_reducer/UPDATE_PROFILE_STATUS';
const SAVE_PHOTO_SUCCESS = 'social-network-ts/profile_reducer/SAVE_PHOTO_SUCCESS';

//Types
export type PostType = {
  id: number,
  message: string,
  likesCount: number
}
type PhotoType = {
  small: string
  large: string
}
export type ContactsType = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}
export type ProfileUserType = {
  aboutMe: string
  contacts: ContactsType,
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotoType
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
  profileUser: ProfileUserType | null
  profileStatus: string
}
export type addPostAT = ReturnType<typeof addPost>
export type setUsersProfileAT = ReturnType<typeof setUsersProfile>
export type setProfileStatusAT = ReturnType<typeof setProfileStatus>
export type updateProfileStatusAT = ReturnType<typeof updateProfileStatus>
export type savePhotoSuccessAT = ReturnType<typeof savePhotoSuccess>
export type ActionsTypesPR = addPostAT
    | setUsersProfileAT
    | updateProfileStatusAT
    | savePhotoSuccessAT
    | setProfileStatusAT;

//Initial State
const initialState: ProfilePageType = {
  posts: [
    {
      id: 1,
      message: 'Перебираемые (или итерируемые) объекты – это...',
      likesCount: 9
    },
    {
      id: 2,
      message: 'Конечно же, сами массивы являются перебираемыми...',
      likesCount: 19
    },
    {
      id: 3,
      message: 'Если объект не является массивом, но представляет...',
      likesCount: 3
    },
  ] as Array<PostType>,
  newPostText: '' as string,
  profileUser: null as null | ProfileUserType,
  profileStatus: '',
};

// Reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypesPR): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPostMessage,
        likesCount: 19
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profileUser: action.profileUser
      }
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.profileStatus,
      }
    case UPDATE_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.newStatus,
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profileUser: {
          ...state.profileUser,
          photos: action.photo
        } as ProfileUserType
      }
    default:
      return state;
  }
}

// Action Creators
export const addPost = (newPostMessage: string) => {
  return {type: ADD_POST, newPostMessage} as const
}
export const setUsersProfile = (profileUser: ProfileUserType) => {
  return {
    type: SET_USER_PROFILE,
    profileUser,
  } as const
}
export const setProfileStatus = (profileStatus: string) => {
  return {
    type: SET_PROFILE_STATUS,
    profileStatus,
  } as const
}
export const updateProfileStatus = (newStatus: string) => {
  return {
    type: UPDATE_PROFILE_STATUS,
    newStatus,
  } as const
}
export const savePhotoSuccess = (photo: PhotoType) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photo,
  } as const
}

// ThunkCreator
export const getUserProfile = (userID: number) => {
  return async (dispatch: AppDispatch) => {
    let response = await profileApi.getProfile(userID)
    dispatch(setUsersProfile(response.data));
  }
}
export const getStatus = (userID: number) => {
  return async (dispatch: AppDispatch) => {
    let response = await profileApi.getStatus(userID)
    dispatch(setProfileStatus(response.data));
  }
}
export const updateStatus = (newStatus: string) => {
  return async (dispatch: AppDispatch) => {
    let response = await profileApi.updateStatus(newStatus)
    if (response.data.resultCode === 0) {
      dispatch(setProfileStatus(response.data.status));
    }
  }
}
export const savePhoto = (file: File) => {
  return async (dispatch: AppDispatch) => {
    try {
      let response = await profileApi.savePhoto(file)
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}
export const saveProfile = (formData: ProfileFormDataType) => {
  return async (dispatch: AppDispatch, getState: () => AppStateType) => {
    const userID = getState().auth.userId;
    dispatch(toggleIsFetching(true));
    const response = await profileApi.saveProfile(formData)
    if (response.data.resultCode === 0) {
      if (userID) {
        // @ts-ignore
        dispatch(getUserProfile(userID));
      } else {
        // @ts-ignore
        dispatch(stopSubmit('edit_profile', {
          _error: response.data.messages[0]
        }))
        return Promise.reject(response.data.messages[0])
      }
    }
    dispatch(toggleIsFetching(false));
  }
}

