import {DialogsActionTypes} from "./dialogs_reducer"; // Refactoring

//Initial State
let initialState: SideBarType = {};

//Reducer
export const sideBarReducer = (state = initialState, action: DialogsActionTypes): SideBarType => {
  switch (action.type) {
    default:
      return state;
  }
}

//Types
export type SideBarType = {}