import React from 'react';
import classes from './MyInfo.module.css';
import PhotosContainer from './Photos/PhotosContainer';
import FriendsContainer from './Friends/FriendsContainer';

function MyInfo(props){
    return (
        <div className={classes.myInfo}>
            <PhotosContainer />
            <FriendsContainer />
        </div>
    );
}

export default MyInfo;