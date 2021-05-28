import {addMessageAC, DialogPageType, updateNewTextMessageAC} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

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
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewTextMessage: (newText: string) => {
            dispatch(updateNewTextMessageAC(newText))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

