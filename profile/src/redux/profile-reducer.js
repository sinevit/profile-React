import { profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    profile : null,
    posts : [
        {id: 1, like:15, message: `Желтый лист плывет.
        У какого берега, цикада,
        Вдруг проснешься ты?`},
        {id: 2, like:1, message: `Цветок… И еще цветок…
        Так распускается слива,
        Так прибывает тепло.`},
        {id: 3, like:25, message: 'My first post'}
        ],
    newPostText: 'Hellooo))',
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            const newPost = {
                id: 4, 
                like: 0, 
                message: state.newPostText
            };
            
            return{
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case CHANGE_POST:
            return{
                ...state, 
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE:
            return{
                ...state, 
                profile: action.profile
            }
        case SET_USER_STATUS:
            return{
                ...state, 
                status: action.status
            }
        default:
            return state;
    }

}

export const setUserProfile = (profile) => ({type: "SET_USER_PROFILE", profile})
export const setUserStatus = (status) => ({type: "SET_USER_STATUS", status})
export const addPosts = () => ({type: "ADD-POST"})
export const changePosts = (text) => ({type: "CHANGE-POST", newPostText: text})

export const getUserID = (profileId) => {
    return (dispatch) => {
        profileAPI.getProfileID(profileId)
        .then(
            data => {
                dispatch(setUserProfile(data));
            }
        )
    }
}
export const getStatus = (profileId) => {
    return (dispatch) => {
        profileAPI.getStatus(profileId)
        .then(
            data => {
                dispatch(setUserStatus(data));
            }
        )
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(
            data => {
                if(data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                };
            }
        )
    }
}
