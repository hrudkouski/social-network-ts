import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

type AddMessageFormDataType = {
    newPostText: string
}

export const MyPosts: React.FC<MyPostPropsType> = React.memo((props) => {

    console.log('My posts')

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
})

const maxLength10 = maxLengthCreator('10');

const AddNewPostForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Textarea}
                name='newPostText'
                placeholder='Enter your post'
                validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm<AddMessageFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm);