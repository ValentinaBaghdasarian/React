import {applyMiddleware, combineReducers ,legacy_createStore as createStore} from 'redux';
import profileReducer from './reducers/profile-reducer';
import dialogReducer from './reducers/dialog-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';
import  thunkMiddleware  from 'redux-thunk';


let reducers = combineReducers(
    {
        profile: profileReducer,
        dialog: dialogReducer,
        usersPage: usersReducer,
        myInfo: profileReducer,
        auth: authReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;


window.store = store;