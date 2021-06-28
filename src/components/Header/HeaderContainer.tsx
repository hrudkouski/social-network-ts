import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUsersData, toggleIsFetching} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux-store";

export type MapStatePropsType = {
    login: string
    isAuth: boolean
};
type MapDispatchToPropsType = {
    setAuthUsersData: (userId: number, login: string, email: string) => void
    toggleIsFetching: (isFetching: boolean) => void
    getAuthUserData: () => void
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


export default connect(mapStateToProps, {setAuthUsersData, toggleIsFetching, getAuthUserData})(HeaderContainer);
