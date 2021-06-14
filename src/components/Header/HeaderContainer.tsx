import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUsersData, toggleIsFetching} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    login: string
    isAuth: boolean
};
type MapDispatchToPropsType = {
    setAuthUsersData: (userId: number, login: string, email: string) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toggleIsFetching(false);
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUsersData(id, login, email);
                }
            })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
}

export default connect(mapStateToProps, {setAuthUsersData, toggleIsFetching})(HeaderContainer);
