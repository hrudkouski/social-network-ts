import React from 'react';
import axios from "axios";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileUserType, setUsersProfile} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
    userID: string
}
type MapStatePropsType = {
    profileUser: ProfileUserType | null
}
type MapDispatchToPropsType = {
    setUsersProfile: (profileUser: ProfileUserType) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType;
type OwnProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser
    }
}

class ProfileContainer extends React.Component<OwnProfilePropsType> {
    componentDidMount() {
       let userID = this.props.match.params.userID;
       if (!userID) {
           userID = '2';
       }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }
    render() {
        return (
            <Profile
                {...this.props}
                profileUser={this.props.profileUser}
            />
        )
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainerWithRouter);





