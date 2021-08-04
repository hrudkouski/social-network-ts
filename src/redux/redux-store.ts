import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsTypesPR, profileReducer} from "./profile_reducer";
import {UsersActionTypes, usersReducer} from "./users_reducer";
import {AuthActionTypes, authReducer} from "./auth_reducer";
import {ActionsTypesDR, dialogsReducer} from "./dialogs_reducer";
import {sideBarReducer} from "./sideBar_reducer";
import thunkMiddleWare, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form';
import {ActionsTypesAPP, appReducer} from "./app_reducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export type AppActionType =
    | ActionsTypesPR
    | ActionsTypesDR
    | UsersActionTypes
    | AuthActionTypes
    | FormAction
    | ActionsTypesAPP
// export type StoreType = typeof store;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;

// @ts-ignore
window.__store__ = store;
