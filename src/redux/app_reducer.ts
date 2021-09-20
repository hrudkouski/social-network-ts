import {AppThunk} from "./redux-store";
import {getAuthUserData, toggleIsFetching} from "./auth_reducer";

//Actions
enum App {
  SET_INITIALIZED = 'social-network-ts/app_reducer/SET_INITIALIZED',
}

//Types
export type AppActionTypes = ReturnType<typeof setInitialized>;
type AppInitialStateType = typeof initialState;

//Initial State
const initialState = {
  initialized: false as boolean,
};

//Reducer
export const appReducer = (state = initialState, action: AppActionTypes): AppInitialStateType => {
  switch (action.type) {
    case App.SET_INITIALIZED:
      return {
        ...state,
        initialized: action.value,
      }
    default:
      return state;
  }
}

//Action Creators
export const setInitialized = (value: boolean) => {
  return {type: App.SET_INITIALIZED, value} as const
}

//ThunkCreator
export const initializeApp = (): AppThunk => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    let res = dispatch(getAuthUserData());
    Promise.all([res])
        .then(() => {
          dispatch(setInitialized(true))
          dispatch(toggleIsFetching(false));
        })
  }
}