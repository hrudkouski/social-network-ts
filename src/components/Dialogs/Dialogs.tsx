import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddMessageFormDataType = {
    newMessageBody: string
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, ...props}) => {

    const dialogsElements = dialogsPage.dialogs.map(el =>
        <DialogsItem
            key={el.id}
            name={el.name}
            id={el.id}
        />);
    const messagesElements = dialogsPage.messages.map(el =>
        <Message
            message={el.message}
            key={el.id}
        />);

    const addNewMessage = (values: AddMessageFormDataType) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddDialogsMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

const AddDialogsMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component='textarea'
                name='newMessageBody'
                placeholder='Enter your message'
            />
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}

const AddDialogsMessageReduxForm = reduxForm<AddMessageFormDataType>({form: 'dialogsAddMessageForm'})(AddDialogsMessageForm);