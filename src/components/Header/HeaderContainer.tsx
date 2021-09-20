import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {
  authActions,
  logout,
} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from 'redux';

export type MapStatePropsType = {
  login: string | null
  isAuth: boolean
  isFetching: boolean
};
type MapDispatchToPropsType = {
  setAuthUsersData: (userId: number, login: string, email: string) => void
  toggleIsFetching: (isFetching: boolean) => void
  logout: () => void
}
export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

  render() {
    return <Header {...this.props}/>;
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
  };
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
      setAuthUsersData: authActions.setAuthUsersData,
      toggleIsFetching: authActions.toggleIsFetching,
      logout
    }),
)(HeaderContainer);
