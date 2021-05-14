import {ActionsTypes, SideBarType} from "./store";

export const sideBarReducer = (state: SideBarType, action: ActionsTypes) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sideBarReducer;