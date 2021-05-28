const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type addPostAT = ReturnType<typeof addPostAC>
export type updateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type ActionsTypesPR = addPostAT | updateNewPostTextAT;

const initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            message: 'Перебираемые (или итерируемые) объекты – это...',
            likesCount: 9
        },
        {
            id: 2,
            message: 'Конечно же, сами массивы являются перебираемыми...',
            likesCount: 19
        },
        {
            id: 3,
            message: 'Если объект не является массивом, но представляет...',
            likesCount: 3
        },
    ] as Array<PostType>,
    newPostText: '' as string,
};


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypesPR): ProfilePageType => {
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

export const addPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}

