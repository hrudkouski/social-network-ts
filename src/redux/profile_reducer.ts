import {AppDispatch, AppThunk} from "./redux-store";
import {profileApi} from "../api/api";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {toggleIsFetching} from "./auth_reducer";
import {stopSubmit} from "redux-form";
import {PhotoType} from "../types/types";

//Actions
enum Profile {
  ADD_POST = 'social-network-ts/profile_reducer/ADD_POST',
  SET_USER_PROFILE = 'social-network-ts/profile_reducer/SET_USER_PROFILE',
  SET_PROFILE_STATUS = 'social-network-ts/profile_reducer/SET_PROFILE_STATUS',
  UPDATE_PROFILE_STATUS = 'social-network-ts/profile_reducer/UPDATE_PROFILE_STATUS',
  SAVE_PHOTO_SUCCESS = 'social-network-ts/profile_reducer/SAVE_PHOTO_SUCCESS',
}

//Types
export type PostType = {
  id: number
  message: string
  likesCount: number
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
export type ProfilePageInitialStateType = {
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
export type ProfileActionTypes = addPostAT
    | setUsersProfileAT
    | updateProfileStatusAT
    | savePhotoSuccessAT
    | setProfileStatusAT;

//Initial State
const initialState: ProfilePageInitialStateType = {
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

//Reducer
export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfilePageInitialStateType => {
  switch (action.type) {
    case Profile.ADD_POST:
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPostMessage,
        likesCount: 19
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case Profile.SET_USER_PROFILE:
      return {
        ...state,
        profileUser: action.profileUser
      }
    case Profile.SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.profileStatus,
      }
    case Profile.UPDATE_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.newStatus,
      }
    case Profile.SAVE_PHOTO_SUCCESS:
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

//Action Creators
export const addPost = (newPostMessage: string) => {
  return {type: Profile.ADD_POST, newPostMessage} as const
}

export const setUsersProfile = (profileUser: ProfileUserType) => {
  return {
    type: Profile.SET_USER_PROFILE,
    profileUser,
  } as const
}

export const setProfileStatus = (profileStatus: string) => {
  return {
    type: Profile.SET_PROFILE_STATUS,
    profileStatus,
  } as const
}

export const updateProfileStatus = (newStatus: string) => {
  return {
    type: Profile.UPDATE_PROFILE_STATUS,
    newStatus,
  } as const
}

export const savePhotoSuccess = (photo: PhotoType) => {
  return {
    type: Profile.SAVE_PHOTO_SUCCESS,
    photo,
  } as const
}


//ThunkCreator
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
    try {
      let response = await profileApi.updateStatus(newStatus)
      if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(newStatus));
      }
    } catch (e) {
      alert(e)
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

export const saveProfile = (formData: ProfileFormDataType): AppThunk => {
  return async (dispatch, getState) => {
    const userID = getState().auth.userId;
    dispatch(toggleIsFetching(true));
    const response = await profileApi.saveProfile(formData)
    if (response.data.resultCode === 0) {
      if (userID) {
        await dispatch(getUserProfile(userID));
      } else {
        dispatch(stopSubmit('edit_profile', {
          _error: response.data.messages[0]
        }))
        return Promise.reject(response.data.messages[0])
      }
    }
    dispatch(toggleIsFetching(false));
  }
}

