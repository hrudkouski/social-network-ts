import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
  FilterType,
  follow, getResponseUsers, unFollow,
  usersActions, UserType
} from "../../redux/users_reducer";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
  getCurrentPage, getFollowingInProgress, getIsFetching,
  getPageSize, getTotalUserCount, getUsers, getUsersFilter
} from "../../redux/users_selectors";
import {Users} from "./Users";

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUserCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
  filter: FilterType
}
type MapDispatchPropsType = {
  followUser: (userID: number) => void
  unFollowUser: (userID: number) => void
  setCurrentPage: (page: number) => void
  toggleFollowingProgress: (progress: boolean, userID: number) => void
  getResponseUsers: (currentPage: number, filter: FilterType) => void
  unFollow: (userID: number) => void
  follow: (userID: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state),
  }
}

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    const {currentPage, getResponseUsers, filter} = this.props
    getResponseUsers(currentPage, filter);
  }

  onPageChanged = (pageNumber: number) => {
    const {setCurrentPage, getResponseUsers, filter} = this.props
    setCurrentPage(pageNumber);
    getResponseUsers(pageNumber, filter);
  }

  onFilterChanged = (filter: FilterType) => {
    const {getResponseUsers} = this.props
    getResponseUsers(1, filter);
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
          onFilterChanged={this.onFilterChanged}
      />
    </>
  }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
      followUser: usersActions.followUser,
      toggleFollowingProgress: usersActions.toggleFollowingProgress,
      unFollowUser: usersActions.unFollowUser,
      setCurrentPage: usersActions.setCurrentPage,
      getResponseUsers,
      unFollow,
      follow
    }),
)(UsersContainer);