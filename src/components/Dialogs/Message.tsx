import React from 'react'
import s from './Message.module.css'

export type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}