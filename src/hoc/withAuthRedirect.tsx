import React from 'react';
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export type MapStateToPropsForRedirectType = {
  isAuth: boolean
};

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => {
  return {
    isAuth: state.auth.isAuth,
  };
}

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
  class RedirectComponent extends React.Component<MapStateToPropsForRedirectType> {
    render() {
      const {isAuth, ...restProps} = this.props;
      if (!isAuth) {
        return <Redirect to='/login'/>
      }
      return <Component {...restProps as T}/>
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}