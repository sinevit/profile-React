import { profileAPI } from "../API/api";

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

let initialState = {
    profile: null,
    posts: [
        {
            id: 1, like: 15, message: `Желтый лист плывет.
        У какого берега, цикада,
        Вдруг проснешься ты?`},
        {
            id: 2, like: 1, message: `Цветок… И еще цветок…
        Так распускается слива,
        Так прибывает тепло.`},
        { id: 3, like: 25, message: 'My first post' }
    ],
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                like: 0,
                message: action.newPostText
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.postId),
            };
        default:
            return state;
    }

}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const addPosts = (text) => ({ type: ADD_POST, newPostText: text })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserID = (profileId) => async (dispatch) => {
    let response = await profileAPI.getProfileID(profileId);

    dispatch(setUserProfile(response));
}

export const getStatus = (profileId) => async (dispatch) => {
    let response = await profileAPI.getStatus(profileId);

    dispatch(setUserStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.resultCode === 0) {
        dispatch(setUserStatus(status))
    };
}
