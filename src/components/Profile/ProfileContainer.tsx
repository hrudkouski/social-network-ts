import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
  getStatus,
  getUserProfile,
  ProfileUserType,
  savePhoto,
  saveProfile,
  updateStatus
} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileFormDataType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";

type PathParamsType = {
  userID: string
}
type MapStatePropsType = {
  profileUser: ProfileUserType | null
  profileStatus: string
  authorizedUserID: number | null
  isAuth: boolean
}
type MapDispatchToPropsType = {
  getUserProfile: (userID: number) => void
  getStatus: (userID: number) => void
  updateStatus: (newStatus: string) => void
  savePhoto: (photo: File) => void
  saveProfile: (formData: ProfileFormDataType) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType;
type OwnProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profileUser: state.profilePage.profileUser,
    profileStatus: state.profilePage.profileStatus,
    authorizedUserID: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

class ProfileContainer extends React.Component<OwnProfilePropsType> {

  refreshProfile() {
    let userID: number | null = Number(this.props.match.params.userID);
    if (!userID) {
      userID = Number(this.props.authorizedUserID);
      if (!userID) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userID);
    this.props.getStatus(userID);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<OwnProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userID !== prevProps.match.params.userID) {
      this.refreshProfile()
    }
  }

  componentWillUnmount() {
  }

  render() {
    return (
        <Profile
            {...this.props}
            savePhoto={this.props.savePhoto}
            isOwner={!this.props.match.params.userID}
            profileUser={this.props.profileUser}
            profileStatus={this.props.profileStatus}
            updateStatus={this.props.updateStatus}
            saveProfile={this.props.saveProfile}
        />
    )
  }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
      getUserProfile,
      getStatus,
      updateStatus,
      savePhoto,
      saveProfile,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);





