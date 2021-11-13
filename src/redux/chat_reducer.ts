import {AppThunk, GetActionsTypes} from "./redux-store";
import {chatApi, ChatMessageType, ChatStatusType} from "../api/chatApi";
import {Dispatch} from "redux";

//Actions
enum Chat {
  MESSAGES_RECEIVED = 'social-network-ts/chat_reducer/MESSAGES_RECEIVED',
  STATUS_CHANGED = 'social-network-ts/chat_reducer/STATUS_CHANGED',
}

//Initial State
const initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as ChatStatusType,
}

//Reducer
export const chatReducer = (state = initialState, action: ChatActionTypes): ChatInitialStateType => {
  switch (action.type) {
    case Chat.MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      }
    case Chat.STATUS_CHANGED:
      return {
        ...state,
        status: action.payload.status,
      }
    default:
      return state;
  }
}

//Action Creators
export const chatActions = {
  messagesReceived: (messages: ChatMessageType[]) => ({
    type: Chat.MESSAGES_RECEIVED,
    payload: {messages},
  } as const),
  statusChanged: (status: ChatStatusType) => ({
    type: Chat.STATUS_CHANGED,
    payload: {status},
  } as const),
}

//Thunk Creators
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages: ChatMessageType[]) => {
      dispatch(chatActions.messagesReceived(messages))
    }
  }
  return _newMessageHandler;
}

let _newStatusChangedHandler: ((status: ChatStatusType) => void) | null = null
const newStatusChangedCreator = (dispatch: Dispatch) => {
  if (_newStatusChangedHandler === null) {
    _newStatusChangedHandler = (status: ChatStatusType) => {
      dispatch(chatActions.statusChanged(status))
    }
  }
  return _newStatusChangedHandler;
}

export const startMessagesListening = (): AppThunk => {
  return async (dispatch) => {
    chatApi.start()
    chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed', newStatusChangedCreator(dispatch))
  }
}

export const stopMessagesListening = (): AppThunk => {
  return async (dispatch) => {
    chatApi.unSubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.unSubscribe('status-changed', newStatusChangedCreator(dispatch))
    chatApi.stop()
  }
}

export const sendMessage = (message: string): AppThunk => {
  return async () => chatApi.sendMessage(message)
}

//Types
type ChatInitialStateType = typeof initialState;
export type ChatActionTypes = GetActionsTypes<typeof chatActions>