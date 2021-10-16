import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {useSelector} from "react-redux";
import {getIsFetching} from "../../redux/users_selectors";
import {Users} from "./Users";

const UsersPage = () => {
  const isFetching = useSelector(getIsFetching)
  return <>
    {isFetching && <Preloader/>}
    <Users/>
  </>
};

export default UsersPage;