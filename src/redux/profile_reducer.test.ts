import {addPost, PostType, ProfilePageType, profileReducer, ProfileUserType} from "./profile_reducer";

let startState: ProfilePageType;

beforeEach(() => {
    startState = {
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
        profileUser: null as null | ProfileUserType,
        profileStatus: '',
    };
})

it('new post should be added', function () {
    let action = addPost('new post')

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(4);
    expect(newState.posts[3].message).toBe('new post');
    expect(startState.posts.length).toBe(3);
});