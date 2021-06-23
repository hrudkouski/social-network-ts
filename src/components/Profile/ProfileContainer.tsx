import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile, ProfileUserType} from "../../redux/profile_reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userID: string
}
type MapStatePropsType = {
    profileUser: ProfileUserType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType;
type OwnProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        isAuth: state.auth.isAuth,
    }
}

class ProfileContainer extends React.Component<OwnProfilePropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '2';
        }
        this.props.getUserProfile(userID);
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to='/login'/>
        }

        return (
            <Profile
                {...this.props}
                profileUser={this.props.profileUser}
            />
        )
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter);





