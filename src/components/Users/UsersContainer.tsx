import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, followUser, getResponseUsers,
    setCurrentPage, toggleFollowingProgress,
    unFollow, unFollowUser, UserType
} from "../../redux/users_reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUserCount, getUsers
} from "../../redux/users_selectors";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setCurrentPage: (page: number) => void
    toggleFollowingProgress: (progress: boolean, userID: number) => void
    getResponseUsers: (currentPage: number) => void
    unFollow: (userID: number) => void
    follow: (userID: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getResponseUsers(this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getResponseUsers(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
                followingInProgress={this.props.followingInProgress}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
            />
        </>
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        followUser,
        toggleFollowingProgress,
        unFollowUser,
        setCurrentPage,
        getResponseUsers,
        unFollow,
        follow
    }),
)(UsersContainer);