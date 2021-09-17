import axios from "axios";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";

const instance = axios.create({
  withCredentials: true,
  headers: {'API-KEY': '3af7a44d-0a6b-4bf7-b34b-b5730fa5756f'},
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersApi = {
  getUsers(currentPage: number) {
    return instance.get(`users?page=${currentPage}&count=10`)
        .then(response => {
          return response.data;
        })
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`)
        .then(response => {
          return response.data;
        })
  },
  follow(id: number) {
    return instance.post(`follow/${id}`)
        .then(response => {
          return response.data;
        })
  },
}

export const profileApi = {
  getProfile(userID: number | null) {
    return instance.get(`profile/${userID}`)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(newStatus: string) {
    return instance.put(`profile/status`, {status: newStatus})
  },
  savePhoto(photoFile: File) {
    let formData = new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(formData: ProfileFormDataType) {
    return instance.put(`profile`, formData)
  },
}

export const authApi = {
  amIsAuth() {
    return instance.get<AuthResponseType>(`auth/me`)
        .then(res => res.data)
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post<LoginResponseType>(`auth/login`, {
      email, password, rememberMe, captcha
    })
        .then(res => res.data)
  },
  logout() {
    return instance.delete<LogOutResponseType>(`auth/login`).then(res => res.data)
  }
}

export const securityApi = {
  getCaptcha() {
    return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
  },
}

//Types
type GetCaptchaUrlResponseType = {
  url: string | null
}

type AuthResponseType = {
  resultCode: ResultCodesEnum
  messages: string[]
  data: { id: number, email: string, login: string }
  fieldsErrors: string[]
}

type LoginResponseType = {
  resultCode: ResultCodesEnum
  messages: string[]
  data: { userId: number }
  fieldsErrors: string[]
}

type LogOutResponseType = {
  resultCode: ResultCodesEnum
  messages: string[]
  data: {}
  fieldsErrors: string[]
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}



