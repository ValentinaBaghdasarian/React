import React from "react";
import MyInfo from "./MyInfo/MyInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from'./Profile.module.css';
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props){
    return (
        <div className={classes.profile}>
            <ProfileAvatar/>
            <div className={classes.userHeader}>
                <div className={classes.userPhoto}>
                    <img src='https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613'/>
                </div>
                <div className={classes.userName}>
                    <p>Sofia Stuart</p>
                </div>
            </div>
            <div className={classes.profileContent}>
                <MyInfo profile={props.state.profile}/>
                <ProfileInfo newPostText={props.state.profile.newPostText} dispatch={props.dispatch}/>
                <MyPosts profile={props.state.profile}/>
            </div>
       </div>
    );
}

export default Profile;