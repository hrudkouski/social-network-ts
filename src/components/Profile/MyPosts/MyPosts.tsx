import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts - component
            <div>
                <div>
                    <textarea>new text...</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post
                    message='Перебираемые (или итерируемые) объекты – это концепция, которая позволяет использовать любой объект в цикле for..of.'
                    likesCount={9}/>
                <Post
                    message='Конечно же, сами массивы являются перебираемыми объектами. Но есть и много других встроенных перебираемых объектов, например, строки.'
                    likesCount={19}/>
                <Post
                    message='Если объект не является массивом, но представляет собой коллекцию каких-то элементов, то удобно использовать цикл for..of для их перебора, так что давайте посмотрим, как это сделать.'
                    likesCount={3}/>
            </div>
        </div>
    );
}