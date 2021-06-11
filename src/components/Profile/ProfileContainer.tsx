import React from 'react';
import axios from "axios";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileUserType, setUsersProfile} from "../../redux/profile_reducer";

type MapStatePropsType = {
    profileUser: ProfileUserType | null
}
type MapDispatchToPropsType = {
    setUsersProfile: (profileUser: ProfileUserType) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profileUser: state.profilePage.profileUser
    }
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);





