import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

export const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map(el =>
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
    )
}