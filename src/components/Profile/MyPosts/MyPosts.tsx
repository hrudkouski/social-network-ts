import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddMessageFormDataType = {
    newPostText: string
}

export const MyPosts: React.FC<MyPostPropsType> = (props) => {

    let postsElements = props.profilePage.posts.map(el => {
            return (
                <Post
                    key={el.id}
                    message={el.message}
                    likesCount={el.likesCount}/>
            )
        }
    );

    const onAddPost = (values: AddMessageFormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component='textarea'
                name='newPostText'
                placeholder='Enter your post'
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm<AddMessageFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm);