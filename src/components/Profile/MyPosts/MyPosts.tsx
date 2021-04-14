import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const postsData = [
        {
            id: 1,
            message: 'Перебираемые (или итерируемые) объекты – это...',
            likesCount: 9
        },
        {
            id: 2,
            message: 'Конечно же, сами массивы являются перебираемыми...',
            likesCount: 19
        },
        {
            id: 3,
            message: 'Если объект не является массивом, но представляет...',
            likesCount: 3
        },
    ]

    let postsElements = postsData.map(el =>
        <Post message={el.message} likesCount={el.likesCount}/>);

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>new text...</textarea>
                </div>
                <div>
                    <button onClick={() => alert('1')}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}