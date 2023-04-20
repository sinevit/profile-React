import { UsersAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCSES = 'auth/GET_CAPTCHA_URL_SUCCSES';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCSES:
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
export const getCaptchaUrlSuccses = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCSES,
    data: { captchaUrl }
})

export const getAuth = () => async (dispatch) => {
    let responce = await UsersAPI.getAuth()
    if (responce.resultCode === 0) {
        let { id, login, email } = responce.data
        dispatch(setUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe, isAuth, captcha) => async (dispatch) => {
    let data = await UsersAPI.login(email, password, rememberMe, isAuth, captcha);

    if (data.resultCode === 0) {
        dispatch(getAuth())
    }else {
        debugger
        dispatch(getCaptchaUrl())
    }
}

export const logout = () => async (dispatch) => {
    let data = await UsersAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    debugger
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccses(captchaUrl))
}
