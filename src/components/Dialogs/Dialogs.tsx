import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/dialogs_reducer";

type DialogsPropsType = {
    updateNewTextMessage: (newText: string) => void
    addMessage: () => void
    dialogsPage: DialogPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const newMessageText = props.dialogsPage.newMessageText;

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
        props.addMessage()
    };

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value;
        props.updateNewTextMessage(newText)
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
                        placeholder='Enter your message'
                        value={newMessageText}
                        onChange={changeMessageHandler}/>
                    <button onClick={addMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    )
}