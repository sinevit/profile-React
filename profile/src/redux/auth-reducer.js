import { UsersAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

export const authReducer = (state =  initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
                }

        default:
            return state;    
    }
}

export const setUserData = (data) => ({type: SET_USER_DATA , data})

export const getAuth = () => {
    return (dispatch) => {
        UsersAPI.getAuth()
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setUserData(data.data))
            }
        })
    }
}
