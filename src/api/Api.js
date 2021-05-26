import * as axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

// *** DAL (data access layer) ***
//local axios
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0c6cbca3-7592-4cde-9f82-cd833654a00f"
    }
});

//returning a promise (through methods)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method, please use profileAPI object')
         return profileAPI.getProfile(userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status: status });
    }
}
