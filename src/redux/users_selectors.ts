import {AppStateType} from "./redux-store";

export const getUsersPage = (state: AppStateType) => {
    return state.usersPage
};
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
