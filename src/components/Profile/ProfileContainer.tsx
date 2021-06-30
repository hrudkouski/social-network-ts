import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileUserType, updateStatus} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userID: string
}
type MapStatePropsType = {
    profileUser: ProfileUserType | null
    profileStatus: string
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (newStatus: string) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType;
type OwnProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        profileStatus: state.profilePage.profileStatus,
    }
}

class ProfileContainer extends React.Component<OwnProfilePropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '5513';
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
    // withAuthRedirect,
)(ProfileContainer);





