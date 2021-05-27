import {ActionsTypes, SideBarType} from "./redux-store";

let initialState = {};

export const sideBarReducer = (state: SideBarType = initialState, action: ActionsTypes): SideBarType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sideBarReducer;