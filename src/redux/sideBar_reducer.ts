import {ActionsTypes, SideBarType} from "./store";

let initialState = {};

export const sideBarReducer = (state: SideBarType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sideBarReducer;