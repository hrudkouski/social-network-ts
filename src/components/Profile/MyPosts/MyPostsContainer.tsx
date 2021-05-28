import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from '../../../StoreContext';

export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {

                const profilePageState = store.getState().profilePage;

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const onnPostChange = (newPostText: string) => {
                    store.dispatch(updateNewPostTextAC(newPostText))
                }

                return (
                    <MyPosts
                        addPost={addPost}
                        updateNewPostText={onnPostChange}
                        profilePage={profilePageState}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}