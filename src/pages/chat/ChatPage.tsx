import {Button} from "antd";
import React, {useEffect, useRef, useState} from "react";
import {ChatMessageAPIType} from "../../api/chatApi";
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
    {status === 'error' && <div>Some error occurred. Please refresh your page</div>}
    <>
      <Messages/>
      <AddMessageChatForm/>
    </>

  </>
}

const Messages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages)
  const messagesAnchorRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true)

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
      !isAutoScroll && setIsAutoScroll(true)
    } else {
      isAutoScroll && setIsAutoScroll(false)
    }
  }

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
    }
  }, [messages, isAutoScroll])

  return <div style={{height: '400px', overflowY: "auto"}} onScroll={scrollHandler}>
    {messages.map((el) => <Message message={el} key={el.id}/>)}
    <div ref={messagesAnchorRef}/>
  </div>
}

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
  console.log('>>>>>>>>>>>Message')
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
})

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