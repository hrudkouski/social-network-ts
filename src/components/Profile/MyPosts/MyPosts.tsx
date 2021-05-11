import React, {ChangeEvent,KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.profilePage.posts.map(el =>
        <Post
            key={el.id}
            message={el.message}
            likesCount={el.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onKeyPressAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey) {
            props.dispatch(addPostAC())
        }
    }

    const onnPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onKeyPress={onKeyPressAddPost}
                        onChange={onnPostChange}
                        value={props.profilePage.newPostText}
                        className={s.myPostTextarea}/>
                </div>
                <div>
                    <button
                        onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}