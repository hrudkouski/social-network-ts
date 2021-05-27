import React from 'react'
import {addMessageAC, updateNewTextMessageAC} from "../../redux/dialogs_reducer";
import { StoreType } from '../../redux/redux-store';
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const dialogsPageState = props.store.getState().dialogsPage;

    const addMessageHandler = () => {
        props.store.dispatch(addMessageAC())
    };

    const changeMessageHandler = (newText: string) => {
        props.store.dispatch(updateNewTextMessageAC(newText))
    };

    return (
        <Dialogs
            dialogsPage={dialogsPageState}
            updateNewTextMessage={changeMessageHandler}
            addMessage={addMessageHandler}
        />
    )
}