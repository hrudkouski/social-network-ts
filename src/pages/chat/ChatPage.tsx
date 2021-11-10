import {Button} from "antd";
import React, {useEffect, useState} from "react";

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

const ChatPage: React.FC = () => {
  return <div><Chat/></div>
}

const Chat: React.FC = () => {

  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

  useEffect(() => {

    let ws: WebSocket;
    const closeHandler = () => {
      console.log('CLOSE WS')
      setTimeout(createChannel, 3000)
    }

    function createChannel() {
      ws?.removeEventListener('close', closeHandler)
      ws?.close()
      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
      ws.addEventListener('close', closeHandler)
      setWsChannel(ws)
    }

    createChannel()

    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
    }
  }, [])

  return <>
    <Messages wsChannel={wsChannel}/>
    <AddMessageChatForm wsChannel={wsChannel}/>
  </>
}

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      let newMessages = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    }
    wsChannel?.addEventListener('message', messageHandler)

    return () => {
      wsChannel?.removeEventListener('message', messageHandler)
    }
  }, [wsChannel])

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

const AddMessageChatForm: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
  const [text, sendMessageText] = useState<string>('')
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

  useEffect(() => {

    const openHandler = () => {
      setReadyStatus('ready')
    }
    wsChannel?.addEventListener('open', openHandler)
    return () => {
      wsChannel?.removeEventListener('open', openHandler)
    }
  }, [wsChannel])


  const sendMessage = () => {
    if (!text) return
    wsChannel?.send(text)
    sendMessageText('')
  }

  return <div>
    <textarea onChange={e => sendMessageText(e.currentTarget.value)}
              value={text}/>
    <div>
      <Button
          disabled={wsChannel === null || readyStatus !== 'ready'}
          onClick={sendMessage}>Send</Button>
    </div>
  </div>
}

export default ChatPage;