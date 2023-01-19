import {combineReducers ,legacy_createStore as createStore} from 'redux'
import profileReducer from './reducers/profile-reducer';
import dialogReducer from './reducers/dialog-reducer';

let reducers = combineReducers(
    {
        profile: profileReducer,
        dialog:dialogReducer,
    }
);

let store = createStore(reducers);

export default store;