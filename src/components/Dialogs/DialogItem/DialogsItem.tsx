import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './DialogsItem.module.css'

export type DialogsItemType = {
    name: string
    id: number
}

export const DialogsItem = (props: DialogsItemType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img
                src='https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
                alt='avatar'/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

