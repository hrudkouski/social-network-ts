import {GetUsersItemsType, instance, ApiResponseType} from "./api";

export const usersApi = {
  getUsers(currentPage: number, term: string = '', friend: null | boolean = null) {
    return instance.get<GetUsersItemsType>(`users?page=${currentPage}&count=10&term=${term}` + (friend === null ? '' : `&friend=${friend}`) )
        .then(res => res.data)
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`)
        .then(res => res.data) as Promise<ApiResponseType>
  },
  follow(id: number) {
    return instance.post<ApiResponseType>(`follow/${id}`)
        .then(res => res.data)
  },
}