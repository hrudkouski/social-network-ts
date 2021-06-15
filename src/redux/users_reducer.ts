// Actions
const FOLLOW = 'social-network-ts/users_reducer/FOLLOW';
const UNFOLLOW = 'social-network-ts/users_reducer/UNFOLLOW';
const SET_USERS = 'social-network-ts/users_reducer/SET_USERS';
const SET_CURRENT_PAGE = 'social-network-ts/users_reducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network-ts/users_reducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-network-ts/users_reducer/TOGGLE_IS_FETCHING';

//Types
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
export type FollowAT = ReturnType<typeof followUser>
export type UnFollowAT = ReturnType<typeof unFollowUser>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type UsersActionTypes = FollowAT | UnFollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT;

//Initial State
let initialState: UsersPageType = {
    users: [] as Array<UserType>,
    pageSize: 30,
    totalUserCount: 100,
    currentPage: 1,
    isFetching: false,
};

// Reducer
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
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

// Action Creators
export const followUser = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowUser = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)