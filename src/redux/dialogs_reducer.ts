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

const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
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