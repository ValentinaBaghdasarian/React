import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store';
import StoreContext from '../../../redux/StoreContext';
import ProfileInfo from './ProfileInfo';





function ProfileInfoContainer(){
    return(
        <StoreContext>{
            (store) => {
                let onAddPost = () => {
                        store.dispatch(addPostActionCreator());
                };
            
                let onPostChange = (text) =>{
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
            
                return <ProfileInfo updateNewPostText={onPostChange} addPost={onAddPost} profile={store.getState().profile}/> 
            }
        }</StoreContext>
    );
}

export default ProfileInfoContainer;