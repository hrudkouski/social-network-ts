import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.profilePage.posts.map(el =>
        <Post
            key={el.id}
            message={el.message}
            likesCount={el.likesCount}/>);

    const addPost = () => {
        props.addPost();
    }

    const onnPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onnPostChange}
                        value={props.profilePage.newPostText}
                        className={s.myPostTextarea}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}