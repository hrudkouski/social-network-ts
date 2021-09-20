import {instance, ApiResponseType} from "./api";

//Types
type AuthResponseType = {
  id: number
  email: string
  login: string
}
type LoginResponseType = {
  userId: number
}

export const authApi = {
  amIsAuth() {
    return instance.get<ApiResponseType<AuthResponseType>>(`auth/me`)
        .then(res => res.data)
  },
  login(email: string, password: string, rememberMe: boolean = false,
        captcha: string | null = null) {
    return instance.post<ApiResponseType<LoginResponseType>>(`auth/login`, {
      email, password, rememberMe, captcha
    })
        .then(res => res.data)
  },
  logout() {
    return instance.delete<ApiResponseType>(`auth/login`)
        .then(res => res.data)
  }
}