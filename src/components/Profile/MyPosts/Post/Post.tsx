import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    title: string
}

export const Post = (props: PostPropsType) => {

    return (
        <div className={s.item}>
            <img
                src='https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
                alt='avatar'/>
            {props.title}
            <div>
                <span>
                    like
                </span>
            </div>
        </div>

    );
}