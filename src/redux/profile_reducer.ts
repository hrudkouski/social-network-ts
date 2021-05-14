import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 19
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

