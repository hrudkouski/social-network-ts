const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersPageType = {
    users: Array<UserType>
}
export type FollowAT = ReturnType<typeof followAC>
export type UnFollowAT = ReturnType<typeof unFollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type UsersActionTypes = FollowAT | UnFollowAT | SetUsersAT;

let initialState: UsersPageType = {
    users: [] as Array<UserType>
};

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID
                    ? {...el, followed: true}
                    : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID
                    ? {...el, followed: false}
                    : el)
            }
        case SET_USERS:
            return {
                ...state,
                // users: [...state.users, ...action.users]
                users: action.users
            }
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)