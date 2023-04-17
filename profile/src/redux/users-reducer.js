import { UsersAPI } from "../API/api";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users : [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{...state, 
                followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId]
                : state.followingProgress.filter(id => id !== action.userId)
            }

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
export const toogleFollowingProgress = (isFetching, userId) => ({type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId}) 

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize)
        .then(
            data => {
                dispatch(toogleIsFetching(false));
                dispatch(setUser(data.items));
                dispatch(setTotalUsersCount(data.totalCount))
            }
        )

    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        UsersAPI.unfollowUser(userId).then(
            data => {
                if(data.resultCode === 0){
                    dispatch(unfollowUser(userId))
                }
                dispatch(toogleFollowingProgress(false, userId));
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        UsersAPI.followUser(userId).then(
            data => {
                if(data.resultCode === 0){
                    dispatch(followUser(userId))
                }
                dispatch(toogleFollowingProgress(false, userId));
            })
    }
}
