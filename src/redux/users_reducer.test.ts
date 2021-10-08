import {
  UsersPageInitialStateType,
  usersReducer,
  UserType,
  usersActions
} from "./users_reducer";

let initialState: UsersPageInitialStateType;

beforeEach(() => {
  initialState = {
    users: [
      {
        name: 'Mikita 1',
        id: 1,
        uniqueUrlName: '',
        photos: {small: null, large: null,},
        status: 'status 1',
        followed: false,
      },
      {
        name: 'Mikita 2',
        id: 2,
        uniqueUrlName: '',
        photos: {small: null, large: null,},
        status: 'status 2',
        followed: false,
      },
      {
        name: 'Mikita 3',
        id: 3,
        uniqueUrlName: '',
        photos: {small: null, large: null,},
        status: 'status 3',
        followed: true,
      },
      {
        name: 'Mikita 4',
        id: 4,
        uniqueUrlName: '',
        photos: {small: null, large: null,},
        status: 'status 4',
        followed: true,
      },
    ] as Array<UserType>,
    pageSize: 5,
    totalUserCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
  }
})

test('follow success', () => {
  const newState = usersReducer(initialState, usersActions.followUser(1))
  expect(newState.users[0].followed).toBeTruthy();
  expect(newState.users[1].followed).toBeFalsy();
})

test('unFollow success', () => {
  const newState = usersReducer(initialState, usersActions.unFollowUser(3))
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[3].followed).toBeTruthy();
  expect(newState.users[2].followed).toBeFalsy();
})