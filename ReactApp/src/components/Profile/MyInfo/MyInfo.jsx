import React from 'react';
import { Routes } from 'react-router-dom';
import Friends from './Friends/friends';
import classes from './MyInfo.module.css';
import Photos from './Photos/photos';

function MyInfo(props){
    return (
        <div className={classes.myInfo}>
            {/* <Routes> */}

            <Photos myInfo={props.profile.myInfo}/>
            <Friends myInfo={props.profile.myInfo}/>
            
            {/* </Routes> */}
        </div>
    );
}

export default MyInfo;