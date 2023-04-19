import { UsersAPI } from "../API/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const setUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, login, email, isAuth }
})

export const getAuth = () => async (dispatch) => {
    let responce = await UsersAPI.getAuth()
    if (responce.resultCode === 0) {
        let { id, login, email } = responce.data
        dispatch(setUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe, isAuth) => async (dispatch) => {
    let data = await UsersAPI.login(email, password, rememberMe, isAuth);

    if (data.resultCode === 0) {
        dispatch(getAuth())
    }
}

export const logout = () => async (dispatch) => {
    let data = await UsersAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
