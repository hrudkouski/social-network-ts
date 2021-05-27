import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const profilePageState = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onnPostChange = (newPostText: string) => {
        props.store.dispatch(updateNewPostTextAC(newPostText))
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onnPostChange}
            profilePage={profilePageState}
        />
    )
}