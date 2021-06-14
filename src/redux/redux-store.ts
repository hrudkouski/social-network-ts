import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs_reducer";
import sideBarReducer from "./sideBar_reducer";
import {profileReducer} from "./profile_reducer";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth_reducer";

export type AppStateType = ReturnType<typeof rootReducer>
// export type StoreType = typeof store;

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
})

const store = createStore(rootReducer);

export default store;

// @ts-ignore
window.store = store;
