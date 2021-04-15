export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SideBarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SideBarType
}

let state: RootStateType = {
    profilePage: {
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
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Kirill'},
            {id: 5, name: 'Vasil'},
            {id: 6, name: 'Jon'},
        ],
        messages: [
            {id: 1, message: 'Hi! how are you?'},
            {id: 2, message: 'Hi! How old are you?'},
            {id: 3, message: 'Hi! Where are you from?'},
            {id: 4, message: 'Hello! I don\'t need books'},
            {id: 5, message: 'How do you do?'},
            {id: 6, message: 'I\'m fine'},
        ]
    },
    sideBar: {}
}

export default state;