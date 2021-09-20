import axios from "axios";
import {UserType} from "../redux/users_reducer";

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

//Types
export type ApiResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  resultCode: RC
  messages: string[]
  fieldsErrors: string[]
}

export type GetUsersItemsType = {
  items: Array<UserType>
  totalCount: number
  error: null | string
}

export const instance = axios.create({
  withCredentials: true,
  headers: {'API-KEY': '3af7a44d-0a6b-4bf7-b34b-b5730fa5756f'},
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})



