import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    addMessage: () => void
    updateTextMessage: (newMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el =>
        <DialogsItem
            key={el.id}
            name={el.name}
            id={el.id}
        />);
    let messagesElements = props.dialogsPage.messages.map(el =>
        <Message
            message={el.message}
            key={el.id}
        />);

    const addMessageHandler = () => {
        props.addMessage();
    };

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextMessage(e.currentTarget.value);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        value={props.dialogsPage.newMessage}
                        onChange={changeMessageHandler}/>
                        <button onClick={addMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    )
}