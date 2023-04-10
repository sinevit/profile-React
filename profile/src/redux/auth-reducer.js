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
            debugger
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