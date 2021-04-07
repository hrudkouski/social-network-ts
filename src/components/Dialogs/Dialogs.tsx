import React from 'react'
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem";
import {Message} from "./Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name='Nikita' id={1}/>
                <DialogsItem name='Masha' id={2}/>
                <DialogsItem name='Sasha' id={3}/>
                <DialogsItem name='Kirill' id={4}/>
                <DialogsItem name='Vasil' id={5}/>
                <DialogsItem name='Jon' id={6}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi! how are you?'/>
                <Message message='Hi! How old are you?'/>
                <Message message='Hi! Where are you from?'/>
                <Message message='Hello!'/>
                <Message message='How do you do?'/>
                <Message message="I'm fine"/>
            </div>
        </div>
    )
}