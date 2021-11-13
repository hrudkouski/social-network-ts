import {Button} from "antd";
import React, {useEffect, useState} from "react";
import {ChatMessageType} from "../../api/chatApi";
import {useDispatch, useSelector} from "react-redux";
import {
  sendMessage,
  startMessagesListening,
  stopMessagesListening
} from "../../redux/chat_reducer";
import {AppStateType} from "../../redux/redux-store";
import avatarPhoto from "../../assets/images/avatar.png";

const ChatPage: React.FC = () => {
  return <div><Chat/></div>
}

const Chat: React.FC = () => {
  const dispatch = useDispatch()
  const status = useSelector((state: AppStateType) => state.chat.status)

  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stopMessagesListening())
    }
  }, [dispatch])

  return <>
    {
      status === 'error'
          ? <div>Some error occurred. Please refresh your page</div>
          : <>
            <Messages/>
            <AddMessageChatForm/>
          </>
    }
  </>
}

const Messages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages)

  return <div style={{height: '400px', overflowY: "auto"}}>
    {messages.map((el, i) => <Message message={el} key={i}/>)}
  </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
  return <>
    <img src={message.photo !== null
        ? message.photo
        : avatarPhoto}
         alt="avatar"
         style={{width: '30px'}}/>
    <b>{message.userName}</b>
    <br/>
    {message.message}
    <hr/>
  </>
}

const AddMessageChatForm: React.FC = () => {
  const [text, sendMessageText] = useState<string>('')
  const dispatch = useDispatch()
  const status = useSelector((state: AppStateType) => state.chat.status)

  const sendMessageHandler = () => {
    if (!text) return
    dispatch(sendMessage(text))
    sendMessageText('')
  }

  return <div>
    <textarea onChange={e => sendMessageText(e.currentTarget.value)}
              value={text}/>
    <div>
      <Button
          disabled={status !== 'ready'}
          onClick={sendMessageHandler}>Send</Button>
    </div>
  </div>
}

export default ChatPage;