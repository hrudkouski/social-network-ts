import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { ProfilePageType } from '../../../redux/profile_reducer';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    profilePage: ProfilePageType
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const [errorPostText, setErrorPostText] = useState('')

    let postsElements = props.profilePage.posts.map(el =>
        <Post
            key={el.id}
            message={el.message}
            likesCount={el.likesCount}/>);

    const addPost = () => {
        if (props.profilePage.newPostText.trim() !== '') {
            props.addPost()
        } else {
            setErrorPostText('Please, write some text...')
        }
    }

    const onKeyPressAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        setErrorPostText('')
        if (e.ctrlKey) {
            addPost()
        }
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
                        onKeyPress={onKeyPressAddPost}
                        placeholder='Enter your post'
                        onChange={onnPostChange}
                        value={props.profilePage.newPostText}
                        className={`${s.myPostTextarea} ${errorPostText && s.error}`}/>
                </div>
                <div>
                    {errorPostText && <div className={s.errorText}>{errorPostText}</div>}
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