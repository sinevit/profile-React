const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users : [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false
};

export const usersReducer = (state =  initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:           
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u;
            })
        }
        case SET_USERS:
            return{...state, users: [...action.users ]}

        case SET_CURRENT_PAGE:
            return{...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return{...state, totalUsersCount: action.totalUsers}

        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching}

        default:
            return state;    
    }

}

export const setUser = (users) => ({type: "SET_USERS", users}) 
export const setCurrentPage = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage}) 
export const setTotalUsersCount = (totalUsers) => ({type: "SET_TOTAL_USERS_COUNT", totalUsers}) 
export const followUser = (userID) => ({type: "FOLLOW", userID}) 
export const unfollowUser = (userID) => ({type: "UNFOLLOW", userID}) 
export const toogleIsFetching = (isFetching) => ({type: "TOGGLE_IS_FETCHING", isFetching}) 