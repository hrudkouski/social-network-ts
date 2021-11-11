import {AppThunk, GetActionsTypes} from "./redux-store";
import {chatApi, ChatMessageType} from "../api/chatApi";
import {Dispatch} from "redux";

//Actions
enum Chat {
  MESSAGES_RECEIVED = 'social-network-ts/chat_reducer/MESSAGES_RECEIVED',
}

//Initial State
const initialState = {
  messages: [] as ChatMessageType[],
}

//Reducer
export const chatReducer = (state = initialState, action: ChatActionTypes): ChatInitialStateType => {
  switch (action.type) {
    case Chat.MESSAGES_RECEIVED:
      return {
        messages: [...state.messages, ...action.payload.messages]
      }
    default:
      return state;
  }
}

//Action Creators
export const chatActions = {
  messagesReceived: (messages: ChatMessageType[]) => ({
    type: Chat.MESSAGES_RECEIVED,
    payload: {messages}
  } as const),
}

//Thunk Creators
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandler = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages: ChatMessageType[]) => {
      dispatch(chatActions.messagesReceived(messages))
    }
  }
  return _newMessageHandler;
}
export const startMessagesListening = (): AppThunk => {
  return async (dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandler(dispatch))
  }
}
export const stopMessagesListening = (): AppThunk => {
  return async (dispatch) => {
    chatApi.unSubscribe(newMessageHandler(dispatch))
    chatApi.stop()
  }
}
export const sendMessage = (message: string): AppThunk => {
  return async () => chatApi.sendMessage(message)
}

//Types
type ChatInitialStateType = typeof initialState;
export type ChatActionTypes = GetActionsTypes<typeof chatActions>