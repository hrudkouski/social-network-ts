import {ActionsTypesDR} from "./dialogs_reducer"; // Refactoring

//Types
export type SideBarType = {}

//Initial State
let initialState: SideBarType = {};

// Reducer
export const sideBarReducer = (state: SideBarType = initialState, action: ActionsTypesDR): SideBarType => {
    switch (action.type) {
        default:
            return state;
    }
}