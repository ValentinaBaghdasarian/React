import React from 'react';
import classes from './ProfileInfo.module.css';
import UserAvatar from '../UserAvatar/UserAvatar';
// import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store';






function ProfileInfo(props){
debugger
    // let newPostElement = React.createRef();

    let onAddPost = () => {
        if(props.profile.newPostText !== ''){
            props.addPost();
        }
    };

    let onPostChange = (e) =>{
        // let text = newPostElement.current.value;
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.profileInfo}>
            <div className={classes.postArea}>
                <div className={classes.allPost}>
                    <UserAvatar src='https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613'/>
                    <div className={classes.post}>
                        <input className={classes.input} 
                               type='text' 
                               placeholder="What's on your mind?" 
                               onChange={onPostChange}
                            //    ref={newPostElement}
                               value={props.profile.newPostText}              
                        />                        
                    </div>
                </div>
                <hr />
                <div className={classes.button}>
                    <button onClick={onAddPost}>Photo/Video</button>
                </div>
                
            </div>
        </div>
    );
}

export default ProfileInfo;