import {ActionsTypes, DialogPageType, MessageType} from "./store";

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';

export const addMessageAC = () => ({type: ADD_MESSAGE}) as const
export const updateNewTextMessageAC = (newMessageText: string) => {
    return {
        type: UPDATE_TEXT_MESSAGE,
        newMessageText: newMessageText
    } as const
}

let initialState = {
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
};

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessagePost: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessagePost);
            state.newMessageText = '';
            return state;
        case UPDATE_TEXT_MESSAGE:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;