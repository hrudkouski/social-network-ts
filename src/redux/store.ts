import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile_reducer";
import dialogsReducer, {addMessageAC, updateNewTextMessageAC} from "./dialogs_reducer";
import sideBarReducer from "./sideBar_reducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
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
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewTextMessageAC>;

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Перебираемые (или итерируемые) объекты – это...',
                    likesCount: 9
                },
                {
                    id: 2,
                    message: 'Конечно же, сами массивы являются перебираемыми...',
                    likesCount: 19
                },
                {
                    id: 3,
                    message: 'Если объект не является массивом, но представляет...',
                    likesCount: 3
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Kirill'},
                {id: 5, name: 'Vasil'},
                {id: 6, name: 'Jon'},
            ],
            messages: [
                {id: 1, message: 'Hi! how are you?'},
                {id: 2, message: 'Hi! How old are you?'},
                {id: 3, message: 'Hi! Where are you from?'},
                {id: 4, message: 'Hello! I don\'t need books'},
                {id: 5, message: 'How do you do?'},
                {id: 6, message: 'I\'m fine'},
            ],
            newMessageText: ''
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber();
    }
}

export default store;