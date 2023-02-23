import {usersAPI, followAPI} from '../../api/api';



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users:[],
    usersCount:2000,
    totalUsersCount: 10,
    currentPage: 1,
    followingInProgress: []
};

const usersReducer = (state = initialState , action) =>{

    switch(action.type){
        case FOLLOW:
           return {...state,users:state.users.map(user => {
                if(user.id === action.userId){
                    user.followed = false;
                    return  user;
                }
                return user;    
            })};

        case UNFOLLOW: 
        
            return {...state, users:state.users.map(user => {
                if(user.id === action.userId){
                    user.followed = true;
                    return user;
                }
                return user;
            })};
        case SET_USERS:
           return { ...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: [...state.users.filter(user => user.followed === true)]};
        default: return state;
    }
};
//ActionCreator = AC
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFollowingProgress = (user) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, user});


//thunk
export const getUsers = (currentPage, usersCount) => {
    return (dispatch) => {

        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, usersCount).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        followAPI.getFollow(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(followSuccess(userId));
            }
        })
    };
};

export const unfollow = (userId) => {
    return (dispatch) => {
        followAPI.getUnfollow(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollowSuccess(userId));
            }
        });
    };
};

export default usersReducer;