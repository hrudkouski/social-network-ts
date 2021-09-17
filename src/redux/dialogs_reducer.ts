//Actions
enum Dialogs {
  ADD_MESSAGE = 'social-network-ts/dialogs_reducer/ADD_MESSAGE',
}

//Types
export type MessageType = {
  id: number
  message: string
}
export type DialogType = {
  id: number
  name: string
}
export type DialogPageInitialStateType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageText: string
}
export type DialogsActionTypes = ReturnType<typeof addMessage>

//Initial State
let initialState: DialogPageInitialStateType = {
  dialogs: [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Kirill'},
    {id: 5, name: 'Vasil'},
    {id: 6, name: 'Jon'},
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hi! how are you?'},
    {id: 2, message: 'Hi! How old are you?'},
    {id: 3, message: 'Hi! Where are you from?'},
    {id: 4, message: 'Hello! I don\'t need books'},
    {id: 5, message: 'How do you do?'},
    {id: 6, message: 'I\'m fine'},
  ] as Array<MessageType>,
  newMessageText: '' as string
};

//Reducer
export const dialogsReducer = (state = initialState, action: DialogsActionTypes): DialogPageInitialStateType => {
  switch (action.type) {
    case Dialogs.ADD_MESSAGE:
      const newMessagePost: MessageType = {
        id: new Date().getTime(),
        message: action.newMessageBody
      }
      return {
        ...state,
        messages: [...state.messages, newMessagePost],
      };
    default:
      return state;
  }
}

//Action Creators
export const addMessage = (newMessageBody: string) => ({
  type: Dialogs.ADD_MESSAGE,
  newMessageBody
}) as const