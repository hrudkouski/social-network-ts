import React from 'react'
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";

export const Dialogs: React.FC<DialogPageType> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogsItem name={el.name} id={el.id}/>);
    let messagesElements = props.messages.map(el => <Message message={el.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}