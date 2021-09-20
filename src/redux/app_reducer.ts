import {AppThunk, GetActionsTypes} from "./redux-store";
import {authActions, getAuthUserData} from "./auth_reducer";

//Actions
enum App {
  SET_INITIALIZED = 'social-network-ts/app_reducer/SET_INITIALIZED',
}

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
export const appActions = {
  setInitialized: (value: boolean) => ({type: App.SET_INITIALIZED, value}) as const,
}

//ThunkCreator
export const initializeApp = (): AppThunk => {
  return (dispatch) => {
    dispatch(authActions.toggleIsFetching(true));
    let res = dispatch(getAuthUserData());
    Promise.all([res])
        .then(() => {
          dispatch(appActions.setInitialized(true))
          dispatch(authActions.toggleIsFetching(false));
        })
  }
}

//Types
type AppInitialStateType = typeof initialState
export type AppActionTypes = GetActionsTypes<typeof appActions>;