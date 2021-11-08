import {Button} from "antd";
import React from "react";

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
  const messages: any = [1, 2, 3, 4];
  return <div style={{height: '400px', overflowY: "auto"}}>
    {messages.map((el: any) => <Message/>)}
    {messages.map((el: any) => <Message/>)}
    {messages.map((el: any) => <Message/>)}
  </div>
}

const Message: React.FC = () => {
  const message = {
    url: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
    author: 'Mikita',
    text: 'Hello friends'
  }
  return <>
    <img src={message.url} alt="avatar"/> <b>{message.author}</b>
    <br/>
    {message.text}
    <hr/>
  </>
}

const AddMessageChatForm: React.FC = () => {
  return <div>
    <textarea> </textarea>
    <div>
      <Button>Send</Button>
    </div>
  </div>
}

export default ChatPage;