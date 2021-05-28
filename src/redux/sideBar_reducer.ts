import {ActionsTypesDR} from "./dialogs_reducer"; // Refactoring

export type SideBarType = {}

let initialState: SideBarType = {};

export const sideBarReducer = (state: SideBarType = initialState, action: ActionsTypesDR): SideBarType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sideBarReducer;