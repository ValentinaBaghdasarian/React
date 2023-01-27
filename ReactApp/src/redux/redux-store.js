import {combineReducers ,legacy_createStore as createStore} from 'redux';
import profileReducer from './reducers/profile-reducer';
import dialogReducer from './reducers/dialog-reducer';
import usersReducer from './reducers/users-reducer';


let reducers = combineReducers(
    {
        profile: profileReducer,
        dialog: dialogReducer,
        usersPage: usersReducer,
    }
);

let store = createStore(reducers);

export default store;


window.store = store;