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
                <Post title='1'/>
                <Post title='2'/>
                <Post title='3'/>
                <Post title='4'/>
                <Post title='5'/>
            </div>
        </div>
    );
}