const SET_AUTH_USERS_DATA = 'SET_AUTH_USERS_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export type AuthPageType = {
    userId: number
    login: string
    email: string
    isAuth: boolean
    isFetching: boolean
}
export type SetUsersDataAT = ReturnType<typeof setAuthUsersData>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type AuthActionTypes = SetUsersDataAT | ToggleIsFetchingAT;

let initialState: AuthPageType = {
    userId: 5513,
    login: 'hrudkouski',
    email: 'aprilshower19@gmail.com',
    isAuth: false,
    isFetching: false,
}

export const authReducer = (state: AuthPageType = initialState, action: AuthActionTypes): AuthPageType => {
    switch (action.type) {
        case SET_AUTH_USERS_DATA:
            return {
                ...state,
                userId: action.userId,
                login: action.login,
                email: action.email,
                isAuth: true
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

export const setAuthUsersData = (userId: number, login: string, email: string) => ({
    type: SET_AUTH_USERS_DATA,
    userId, login, email
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)