import {authAPI} from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}; 


export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data:{userId, email, login}});

export const getAuth = () =>{ 
    return (dispatch) => {
        authAPI.getAuth().then( response => {
            if(response.data.resultCode === 0){
                let  {email, id, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    };
}


export default authReducer;



// const SET_USER_DATA = 'SET_USER_DATA';

// const initialState = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false
// };

// const authReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SET_USER_DATA:
//             return {
//                 ...state,
//                 ...action.data,
//                 isAuth: true
//             };
//         default:
//             return state;
//     }
// }; 


// export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data:{userId, email, login}});

// export default authReducer;