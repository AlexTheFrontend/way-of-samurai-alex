import * as axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

//local axios
const instance = axios.create({
    withCredentials: true,
    baseURL: '',
    headers: {
        "API-KEY": "0c6cbca3-7592-4cde-9f82-cd833654a00f"
    }
});

//returning a promise (through methods)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}


