import axios from 'axios';
const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        // "API-KEY": 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
        "API-KEY": 'e5eb30d8-6112-47aa-88f0-f6f144aa53be'
        // "API-KEY": 'c515c1bc-3336-4bd7-bd7f-3bfdd67b63f5'
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
    },
    login(email, password, rememberMe=false, captcha='null'){
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
        .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response => response.data)
    },
}

export const securityAPI = {
    getCaptchaUrl(){
        debugger
        return instance.get(`security/get-captcha-url`)
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
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => response.data)
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
        .then(response => response.data)
    },
}