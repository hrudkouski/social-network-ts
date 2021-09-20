import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {InjectedFormProps, reduxForm, reset} from "redux-form";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type AddMessageFormDataType = {
  newMessageBody: string
}

export const Dialogs: React.FC<DialogsPropsType> = (
    {
      dialogsPage,
      ...props
    }
) => {

  const dialogsElements = dialogsPage.dialogs.map(el =>
      <DialogsItem key={el.id} name={el.name} id={el.id}/>);

  const messagesElements = dialogsPage.messages.map(el =>
      <Message message={el.message} key={el.id}/>);

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

type NewMessageFormValuesTypeKeys = Extract<keyof AddMessageFormDataType, string>

const afterSubmit = (result: any, dispatch: any) =>
    dispatch(reset('dialogsAddMessageForm'));

const maxLength50 = maxLengthCreator('50');

const AddDialogsMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <div>
      {createField<NewMessageFormValuesTypeKeys>('newMessageBody', 'Enter your message', Textarea, [required, maxLength50])}
    </div>
    <div>
      <button>Add message</button>
    </div>
  </form>
}

const AddDialogsMessageReduxForm = reduxForm<AddMessageFormDataType>({
  form: 'dialogsAddMessageForm',
  onSubmitSuccess: afterSubmit,
})(AddDialogsMessageForm);