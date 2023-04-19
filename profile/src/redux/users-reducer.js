import { UsersAPI } from "../API/api";

const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, users: [...action.users] }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsers }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }

}

export const setUser = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsers) => ({ type: SET_TOTAL_USERS_COUNT, totalUsers })
export const followUser = (userID) => ({ type: FOLLOW, userID })
export const unfollowUser = (userID) => ({ type: UNFOLLOW, userID })
export const toogleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toogleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toogleIsFetching(true));
    let response = await UsersAPI.getUsers(currentPage, pageSize);

    dispatch(toogleIsFetching(false));
    dispatch(setUser(response.items));
    dispatch(setTotalUsersCount(response.totalCount))
}

const followUnfollowFlow = async(dispatch, apiMethod, actionCreator, userId) => {
    dispatch(toogleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toogleFollowingProgress(false, userId));
}

export const unfollow = (userId) => async (dispatch) => {
    const apiMethod = UsersAPI.unfollowUser;
    const actionCreator = unfollowUser;

    followUnfollowFlow(dispatch, apiMethod, actionCreator, userId);
}

export const follow = (userId) => async (dispatch) => {
    const apiMethod = UsersAPI.followUser;
    const actionCreator = followUser;

    followUnfollowFlow(dispatch, apiMethod, actionCreator, userId);
}
