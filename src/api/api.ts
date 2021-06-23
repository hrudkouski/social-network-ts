import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '3af7a44d-0a6b-4bf7-b34b-b5730fa5756f'
    },
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
    getProfile(userID: string) {
        return instance.get(`profile/${userID}`)
    },
}

export const authApi = {
    amIsAuth() {
        return instance.get(`auth/me`)
    },
}





