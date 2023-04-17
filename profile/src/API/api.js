import axios from 'axios';
const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
    },
    withCredentials: true,
})

export const UsersAPI = {
    getUsers(pageNumber, pageSize ){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => response.data)
    },
    getAuth(){
        return instance.get(`auth/me`)
        .then(response => response.data)
    },
    unfollowUser(userID){
        return instance.delete(`follow/${userID}`)
        .then(response => response.data)
    },
    followUser(userID){
        return instance.post(`follow/${userID}`)
        .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileID(profileId){
        return instance.get(`profile/${profileId}`)
        .then(response => response.data)
    },
    getStatus(profileId){
        return instance.get(`profile/status/${profileId}`)
        .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
        .then(response => response.data)
    },
}