const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: 'Hellooo))'
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
        default:
            return state;
    }

}

export const setUserProfile = (profile) => ({type: "SET_USER_PROFILE", profile})
