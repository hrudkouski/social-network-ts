import axios from "axios";

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
    getProfile(userID: number) {
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
}

export const authApi = {
    amIsAuth() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}





