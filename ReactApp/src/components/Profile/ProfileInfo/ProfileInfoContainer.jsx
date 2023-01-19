import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store';
import ProfileInfo from './ProfileInfo';





function ProfileInfoContainer(props){
    
    // let newPostElement = React.createRef();

    let onAddPost = () => {
        // if(props.store.getState().profile.newPostText !== ''){
            props.store.dispatch(addPostActionCreator());    
        // } 
    };

    let onPostChange = (text) =>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return <ProfileInfo updateNewPostText={onPostChange} addPost={onAddPost} profile={props.store.getState().profile}/>
}

export default ProfileInfoContainer;