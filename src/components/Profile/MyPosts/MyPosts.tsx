import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My posts - component
            <div>
                <div>
                    <textarea>new text...</textarea>
                </div>
                <div>
                    <button onClick={() => alert('1')}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post
                    message='Перебираемые (или итерируемые) объекты – это...'
                    likesCount={9}/>
                <Post
                    message='Конечно же, сами массивы являются перебираемыми...'
                    likesCount={19}/>
                <Post
                    message='Если объект не является массивом, но представляет...'
                    likesCount={3}/>
            </div>
        </div>
    );
}