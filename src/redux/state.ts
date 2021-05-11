const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';

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
    newMessage: string
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
            newMessage: ''
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
        switch (action.type) {
            case ADD_POST:
                const newPost: PostType = {
                    id: new Date().getTime(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 19
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber();
                break;
            case ADD_MESSAGE:
                const newMessagePost: MessageType = {
                    id: new Date().getTime(),
                    message: this._state.dialogsPage.newMessage
                }
                this._state.dialogsPage.messages.push(newMessagePost);
                this._state.dialogsPage.newMessage = '';
                this._callSubscriber();
                break;
            case UPDATE_TEXT_MESSAGE:
                this._state.dialogsPage.newMessage = action.newMessage;
                this._callSubscriber();
        }
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}
export const addMessageAC = () => ({type: ADD_MESSAGE}) as const
export const updateNewTextMessageAC = (newMessage: string) => {
    return {
        type: UPDATE_TEXT_MESSAGE,
        newMessage: newMessage
    } as const
}

export default store;