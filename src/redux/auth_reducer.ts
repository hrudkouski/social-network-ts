import {AppThunk} from "./redux-store";
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

// Actions
const SET_AUTH_USERS_DATA = 'social-network-ts/auth_reducer/SET_AUTH_USERS_DATA';
const TOGGLE_IS_FETCHING = 'social-network-ts/auth_reducer/TOGGLE_IS_FETCHING';

//Types
export type AuthPageType = typeof initialState;
export type AuthActionTypes =
    | ReturnType<typeof setAuthUsersData>
    | ReturnType<typeof toggleIsFetching>

//Initial State
const initialState = {
    userId: 5513 as number | null,
    login: 'hrudkouski' as string | null,
    email: 'aprilshower19@gmail.com' as string | null,
    isAuth: false as boolean,
    isFetching: false as boolean,
}

// Reducer
export const authReducer = (state: AuthPageType = initialState, action: AuthActionTypes): AuthPageType => {
    switch (action.type) {
        case SET_AUTH_USERS_DATA:
            return {
                ...state,
                ...action.payload
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
export const setAuthUsersData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_AUTH_USERS_DATA,
    payload: {userId, login, email, isAuth}
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

// Thunk Creators
export const getAuthUserData = (): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authApi.amIsAuth()
        if (response.data.resultCode === 0) {
            dispatch(toggleIsFetching(false));
            let {id, login, email} = response.data.data;
            dispatch(setAuthUsersData(id, login, email, true));
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
            let action = stopSubmit('login', {_error: message});
            dispatch(action)
        }
        dispatch(toggleIsFetching(false));
    }
}

export const logout = (): AppThunk => {
    debugger
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(toggleIsFetching(false));
            dispatch(setAuthUsersData(null, null, null, false))
        }
    }
}