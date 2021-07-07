import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUsersData, toggleIsFetching} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from 'redux';

export type MapStatePropsType = {
    login: string | null
    isAuth: boolean
};
type MapDispatchToPropsType = {
    setAuthUsersData: (userId: number, login: string, email: string) => void
    toggleIsFetching: (isFetching: boolean) => void
    getAuthUserData: () => void
    logout: () => void
}
export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setAuthUsersData,
        toggleIsFetching,
        getAuthUserData,
        logout
    }),
)(HeaderContainer);
