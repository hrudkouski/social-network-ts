import {DialogsActionTypes} from "./dialogs_reducer"; // Refactoring

//Types
export type SideBarType = {}

//Initial State
let initialState: SideBarType = {};

//Reducer
export const sideBarReducer = (state = initialState, action: DialogsActionTypes): SideBarType => {
  switch (action.type) {
    default:
      return state;
  }
}