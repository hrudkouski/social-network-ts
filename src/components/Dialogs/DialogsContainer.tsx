import {addMessage, DialogPageType, updateNewTextMessage} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStatePropsType = {
    dialogsPage: DialogPageType
}
type MapDispatchToPropsType = {
    updateNewTextMessage: (newText: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewTextMessage: (newText: string) => {
            dispatch(updateNewTextMessage(newText))
        },
        addMessage: () => {
            dispatch(addMessage())
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

