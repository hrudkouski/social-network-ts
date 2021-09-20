import {instance} from "./api";

type GetCaptchaUrlResponseType = {
  url: string | null
}
export const securityApi = {
  getCaptcha() {
    return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
        .then(res => res.data)
  },
}