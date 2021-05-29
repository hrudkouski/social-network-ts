import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sideBarReducer from "./sideBar_reducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store;

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
})

const store = createStore(rootReducer);

export default store;
