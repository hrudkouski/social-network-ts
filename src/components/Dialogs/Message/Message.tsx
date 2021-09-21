import React from 'react'
import s from './Message.module.css'

export type MessageType = {
  message: string
}

export const Message: React.FC<MessageType> = ({message}) => {

  return <div className={s.message}>
    <div>
      {message}
    </div>
  </div>
}