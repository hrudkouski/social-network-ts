import {Button} from "antd";
import React, {useEffect, useState} from "react";

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage: React.FC = () => {
  return <div>
    <Chat/>
  </div>
}

const Chat: React.FC = () => {
  return <>
    <Messages/>
    <AddMessageChatForm/>
  </>
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    wsChannel.addEventListener('message', (e: MessageEvent) => {
      let newMessages = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    })
  }, [])

  return <div style={{height: '400px', overflowY: "auto"}}>
    {messages.map((el, i) => <Message message={el} key={i}/>)}
  </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

  return <>
    <img src={message.photo} alt="avatar" style={{width: '30px'}}/>
    <b>{message.userName}</b>
    <br/>
    {message.message}
    <hr/>
  </>
}

const AddMessageChatForm: React.FC = () => {

  const [text, sendMessageText] = useState<string>('')

  const sendMessage = () => {
    if (!text) return
    wsChannel.send(text)
    sendMessageText('')
  }

  return <div>
    <textarea onChange={e => sendMessageText(e.currentTarget.value)}
              value={text}/>
    <div>
      <Button onClick={sendMessage}>Send</Button>
    </div>
  </div>
}

export default ChatPage;