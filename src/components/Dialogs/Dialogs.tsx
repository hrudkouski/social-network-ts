import React from 'react'
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";

export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Vasil'},
        {id: 6, name: 'Jon'},
    ]

    const messagesData = [
        {id: 1, message: 'Hi! how are you?'},
        {id: 2, message: 'Hi! How old are you?'},
        {id: 3, message: 'Hi! Where are you from?'},
        {id: 4, message: 'Hello! I don\'t need books'},
        {id: 5, message: 'How do you do?'},
        {id: 6, message: 'I\'m fine'},
    ]

    let dialogsElements = dialogsData.map(el => <DialogsItem name={el.name} id={el.id}/>);

    let messagesElements = messagesData.map(el => <Message message={el.message}/>);

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