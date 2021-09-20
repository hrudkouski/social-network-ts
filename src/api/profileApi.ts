import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {instance, ApiResponseType} from "./api";
import {ProfileUserType} from "../redux/profile_reducer";
import {PhotoType} from "../types/types";

type SavePhotoResponseType = {
  photos: PhotoType
}

export const profileApi = {
  getProfile(userID: number | null) {
    return instance.get<ProfileUserType>(`profile/${userID}`)
        .then(res => res.data)
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
        .then(res => res.data)
  },
  updateStatus(newStatus: string) {
    return instance.put<ApiResponseType>(`profile/status`, {status: newStatus})
        .then(res => res.data)
  },
  savePhoto(photoFile: File) {
    let formData = new FormData();
    formData.append("image", photoFile)
    return instance.put<ApiResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
        .then(res => res.data)
  },
  saveProfile(formData: ProfileFormDataType) {
    return instance.put<ApiResponseType>(`profile`, formData)
        .then(res => res.data)
  },
}