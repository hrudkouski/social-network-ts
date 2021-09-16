import {addMessage, DialogPageInitialStateType} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";
import {Dialogs} from "./Dialogs";

type MapStatePropsType = {
    dialogsPage: DialogPageInitialStateType
}
type MapDispatchToPropsType = {
    addMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch(addMessage(newMessageBody))
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

