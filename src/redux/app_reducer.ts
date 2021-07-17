// Actions
import {AppThunk} from "./redux-store";
import {getAuthUserData, toggleIsFetching} from "./auth_reducer";

const SET_INITIALIZED = 'social-network-ts/app_reducer/SET_INITIALIZED'

//Types
export type ActionsTypesAPP = ReturnType<typeof setInitialized>;
type AppStateType = typeof initialState;

//Initial State
const initialState = {
    initialized: false
};

// Reducer
export const appReducer = (state: AppStateType = initialState, action: ActionsTypesAPP): AppStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: action.value
            }
        default:
            return state;
    }
}

// Action Creators
export const setInitialized = (value: boolean) => {
    return {type: SET_INITIALIZED, value} as const
}

// ThunkCreator
export const initializeApp = (): AppThunk => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then( () => {
                dispatch(setInitialized(true))
                dispatch(toggleIsFetching(false));
            })
    }
}