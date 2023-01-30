const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users:[],
    usersCount:2000,
    totalUsersCount: 10,
    currentPage: 1,
};

const usersReducer = (state = initialState , action) =>{
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case FOLLOW:
           return {...stateCopy,users:stateCopy.users.map(user => {
                if(user.id === action.userId){
                    user.followed = false;
                    return  user;
                }
                return user;    
            })};

        case UNFOLLOW: 
            return {...stateCopy, users:stateCopy.users.map(user => {
                if(user.id === action.userId){
                    user.followed = true;
                    return user;
                }
                return user;
            })};
        case SET_USERS:
           return { ...stateCopy, users: action.users};
        case SET_CURRENT_PAGE:
            return {...stateCopy, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...stateCopy, totalUsersCount: action.totalUsersCount};
        default: return state;
    }
};
//ActionCreator = AC
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export default usersReducer;