import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
};
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users;
    });

export const getPageSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getPageSize = createSelector(getPageSelector, (pageSize) => {
    return pageSize;
});

export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage
});

export const getTotalUserCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const getTotalUserCount = createSelector(getTotalUserCountSelector, (totalUserCount) => {
    return totalUserCount;
})

export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) => {
    return isFetching;
});

export const getFollowingInProgressSelector = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getFollowingInProgress = createSelector(getFollowingInProgressSelector, (followingInProgress) => {
    return followingInProgress;
})

