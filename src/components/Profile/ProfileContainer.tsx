import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileUserType, updateStatus} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
    componentDidMount() {
        let userID = Number(this.props.match.params.userID);
        if (!userID) {
            userID = Number(this.props.authorizedUserID);
            if (!userID) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profileUser={this.props.profileUser}
                profileStatus={this.props.profileStatus}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);





