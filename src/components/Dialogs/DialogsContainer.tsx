import React from 'react'
import {addMessageAC, updateNewTextMessageAC} from "../../redux/dialogs_reducer";
import StoreContext from '../../StoreContext';
import {Dialogs} from "./Dialogs";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {

                const dialogsPageState = store.getState().dialogsPage;

                const addMessageHandler = () => {
                    store.dispatch(addMessageAC())
                };

                const changeMessageHandler = (newText: string) => {
                    store.dispatch(updateNewTextMessageAC(newText))
                };

                return (
                    <Dialogs
                        dialogsPage={dialogsPageState}
                        updateNewTextMessage={changeMessageHandler}
                        addMessage={addMessageHandler}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}