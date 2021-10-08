import {follow, unFollow, usersActions} from "./users_reducer";
import {usersApi} from "../api/usersApi";
import {ApiResponseType, ResultCodesEnum} from "../api/api";

jest.mock("../api/usersApi")
const userApiMock = usersApi as jest.Mocked<typeof usersApi>;

const getStateMock = jest.fn();
const dispatchMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  userApiMock.follow.mockClear()
  userApiMock.unFollow.mockClear()
})

const result: ApiResponseType = {
  data: {},
  resultCode: ResultCodesEnum.Success,
  messages: [],
  fieldsErrors: [],
}

test('success follow thunk', async () => {
  const thunk = follow(1);
  userApiMock.follow.mockReturnValue(Promise.resolve(result));
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.followUser(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingProgress(false, 1))
})

test('success unFollow thunk', async () => {
  const thunk = unFollow(1);
  userApiMock.unFollow.mockReturnValue(Promise.resolve(result));
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.unFollowUser(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingProgress(false, 1))
})
