import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unFollowUser,
    UsersPageType,
    UserType
} from "../../redux/users_reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {usersApi} from "../../api/api";

type MapStatePropsType = {
    userPage: UsersPageType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (progress: boolean, userID: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(this.props.currentPage).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                userPage={this.props.userPage}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

export default connect(mapStateToProps, {
    followUser, toggleFollowingProgress, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer);

