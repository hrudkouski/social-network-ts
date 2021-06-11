const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
}

export type addPostAT = ReturnType<typeof addPostAC>
export type updateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type setUsersProfileAT = ReturnType<typeof setUsersProfile>

export type ActionsTypesPR = addPostAT | updateNewPostTextAT | setUsersProfileAT;

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
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypesPR): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 19
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileUser: action.profileUser
            }
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText,
    } as const
}
export const setUsersProfile = (profileUser: ProfileUserType) => {
    return {
        type: SET_USER_PROFILE,
        profileUser,
    } as const
}

