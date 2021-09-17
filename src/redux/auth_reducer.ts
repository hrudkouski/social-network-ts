import {AppThunk} from "./redux-store";
import {authApi, ResultCodesEnum, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

//Actions
enum Auth {
  SET_AUTH_USERS_DATA = 'social-network-ts/auth_reducer/SET_AUTH_USERS_DATA',
  TOGGLE_IS_FETCHING = 'social-network-ts/auth_reducer/TOGGLE_IS_FETCHING',
  GET_CAPTCHA_URL = 'social-network-ts/auth_reducer/GET_CAPTCHA_URL',
}

//Types
type AuthInitialStateType = typeof initialState;
export type AuthActionTypes =
    | ReturnType<typeof setAuthUsersData>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof getCaptchaURLSuccess>

//Initial State
const initialState = {
  userId: 5513 as number | null,
  login: 'hrudkouski' as string | null,
  email: 'aprilshower19@gmail.com' as string | null,
  isAuth: false as boolean,
  isFetching: false as boolean,
  captchaURL: null as string | null, // if null, then captcha is not required
}

//Reducer
export const authReducer = (state = initialState, action: AuthActionTypes): AuthInitialStateType => {
  switch (action.type) {
    case Auth.SET_AUTH_USERS_DATA:
      return {
        ...state,
        ...action.payload
      }
    case Auth.TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case Auth.GET_CAPTCHA_URL:
      return {...state, ...action.payload}
    default:
      return state;
  }
}

//Action Creators
export const setAuthUsersData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
  type: Auth.SET_AUTH_USERS_DATA,
  payload: {userId, login, email, isAuth}
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
  type: Auth.TOGGLE_IS_FETCHING,
  isFetching
} as const)

export const getCaptchaURLSuccess = (captchaURL: string | null) => ({
  type: Auth.GET_CAPTCHA_URL,
  payload: {captchaURL}
} as const)

//Thunk Creators
export const getAuthUserData = (): AppThunk => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await authApi.amIsAuth()
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(toggleIsFetching(false));
      let {id, login, email} = response.data;
      dispatch(setAuthUsersData(id, login, email, true));
    }
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunk => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await authApi.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData())
    } else if (response.resultCode === ResultCodesEnum.CaptchaIsRequired) {
      dispatch(getCaptchaURL())
    } else {
      let message = response.messages.length > 0 ? response.messages : 'Some error';
      let action = stopSubmit('login', {_error: message});
      dispatch(action)
    }
    dispatch(toggleIsFetching(false));
  }
}

export const logout = (): AppThunk => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await authApi.logout()
    if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(toggleIsFetching(false));
      dispatch(setAuthUsersData(null, null, null, false))
    }
  }
}

export const getCaptchaURL = (): AppThunk => {
  return async (dispatch) => {
    const response = await securityApi.getCaptcha()
    const captchaURL = response.data.url;
    dispatch(getCaptchaURLSuccess(captchaURL))
  }
}