import {AppDispatch} from "./redux-store";
import {profileApi} from "../api/api";

// Actions
const ADD_POST = 'social-network-ts/profile_reducer/ADD_POST';
const SET_USER_PROFILE = 'social-network-ts/profile_reducer/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'social-network-ts/profile_reducer/SET_PROFILE_STATUS';
const UPDATE_PROFILE_STATUS = 'social-network-ts/profile_reducer/UPDATE_PROFILE_STATUS';

//Types
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
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
export type ActionsTypesPR = addPostAT
    | setUsersProfileAT
    | updateProfileStatusAT
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

// ThunkCreator
export const getUserProfile = (userID: string) => {
    return (dispatch: AppDispatch) => {
        profileApi.getProfile(userID)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            })
    }
}

export const getStatus = (userID: string) => {
    return (dispatch: AppDispatch) => {
        profileApi.getStatus(userID)
            .then(response => {
                dispatch(setProfileStatus(response.data));
            })
    }
}

export const updateStatus = (newStatus: string) => {
    return (dispatch: AppDispatch) => {
        profileApi.updateStatus(newStatus)
            .then(response => {
                dispatch(setProfileStatus(response.data.status));
            })
    }
}

