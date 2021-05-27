import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, PostType, updateNewPostTextAC} from "./profile_reducer";
import dialogsReducer, {addMessageAC, DialogType, MessageType, updateNewTextMessageAC} from "./dialogs_reducer";
import sideBarReducer from "./sideBar_reducer";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SideBarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SideBarType
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewTextMessageAC>;
export type AppStateType = ReturnType<typeof reducers>
export type StoreType = typeof store;

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
})

const store = createStore(reducers);

export default store;