import * as axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

//local axios
const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "84b57618-1dd3-41e1-947e-9dd6fc7958d9"
    }
});

//returning a promise (through methods)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}


