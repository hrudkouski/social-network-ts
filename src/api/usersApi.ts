import {GetUsersItemsType, instance, ApiResponseType} from "./api";

export const usersApi = {
  getUsers(currentPage: number) {
    return instance.get<GetUsersItemsType>(`users?page=${currentPage}&count=10`)
        .then(res => {
          return res.data;
        })
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`)
        .then(res => {
          return res.data;
        }) as Promise<ApiResponseType>
  },
  follow(id: number) {
    return instance.post<ApiResponseType>(`follow/${id}`)
        .then(res => {
          return res.data;
        })
  },
}