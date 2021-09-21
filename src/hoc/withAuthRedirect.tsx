import React from 'react';
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export type MapPropsType = ReturnType<typeof mapStateToPropsForRedirect>

const mapStateToPropsForRedirect = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
}

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
  function RedirectComponent(props: MapPropsType) {
    const {isAuth, ...restProps} = props;
    if (!isAuth) return <Redirect to='/login'/>
    return <Component {...restProps as WCP}/>
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}