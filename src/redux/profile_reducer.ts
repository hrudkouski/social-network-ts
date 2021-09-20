import {AppDispatch, AppThunk, GetActionsTypes} from "./redux-store";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {authActions} from "./auth_reducer";
import {stopSubmit} from "redux-form";
import {PhotoType} from "../types/types";
import {profileApi} from "../api/profileApi";

//Actions
enum Profile {
  ADD_POST = 'social-network-ts/profile_reducer/ADD_POST',
  SET_USER_PROFILE = 'social-network-ts/profile_reducer/SET_USER_PROFILE',
  SET_PROFILE_STATUS = 'social-network-ts/profile_reducer/SET_PROFILE_STATUS',
  UPDATE_PROFILE_STATUS = 'social-network-ts/profile_reducer/UPDATE_PROFILE_STATUS',
  SAVE_PHOTO_SUCCESS = 'social-network-ts/profile_reducer/SAVE_PHOTO_SUCCESS',
}

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
export const profileActions = {
  addPost: (newPostMessage: string) => {
    return {type: Profile.ADD_POST, newPostMessage} as const
  },
  setUsersProfile: (profileUser: ProfileUserType) => {
    return {
      type: Profile.SET_USER_PROFILE,
      profileUser,
    } as const
  },
  setProfileStatus: (profileStatus: string) => {
    return {
      type: Profile.SET_PROFILE_STATUS,
      profileStatus,
    } as const
  },
  updateProfileStatus: (newStatus: string) => {
    return {
      type: Profile.UPDATE_PROFILE_STATUS,
      newStatus,
    } as const
  },
  savePhotoSuccess: (photo: PhotoType) => {
    return {
      type: Profile.SAVE_PHOTO_SUCCESS,
      photo,
    } as const
  },
}

//ThunkCreator
export const getUserProfile = (userID: number) => {
  return async (dispatch: AppDispatch) => {
    let res = await profileApi.getProfile(userID)
    dispatch(profileActions.setUsersProfile(res));
  }
}

export const getStatus = (userID: number) => {
  return async (dispatch: AppDispatch) => {
    let res = await profileApi.getStatus(userID)
    dispatch(profileActions.setProfileStatus(res));
  }
}

export const updateStatus = (newStatus: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      let res = await profileApi.updateStatus(newStatus)
      if (res.resultCode === 0) {
        dispatch(profileActions.setProfileStatus(newStatus));
      }
    } catch (e) {
      alert(e)
    }
  }
}

export const savePhoto = (file: File) => {
  return async (dispatch: AppDispatch) => {
    try {
      let res = await profileApi.savePhoto(file)
      if (res.resultCode === 0) {
        dispatch(profileActions.savePhotoSuccess(res.data.photos));
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const saveProfile = (formData: ProfileFormDataType): AppThunk => {
  return async (dispatch, getState) => {
    const userID = getState().auth.userId;
    dispatch(authActions.toggleIsFetching(true));
    const res = await profileApi.saveProfile(formData)
    if (res.resultCode === 0) {
      if (userID) {
        await dispatch(getUserProfile(userID));
      } else {
        dispatch(stopSubmit('edit_profile', {
          _error: res.messages[0]
        }))
        return Promise.reject(res.messages[0])
      }
    }
    dispatch(authActions.toggleIsFetching(false));
  }
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
export type ProfileActionTypes = GetActionsTypes<typeof profileActions>

