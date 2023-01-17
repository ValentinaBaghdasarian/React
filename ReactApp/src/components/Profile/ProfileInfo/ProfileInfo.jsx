import React from 'react';
import classes from './ProfileInfo.module.css';
import UserAvatar from '../UserAvatar/UserAvatar';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';






function ProfileInfo(props){

    let newPostElement = React.createRef();

    let addPost = () => {
        // let results = newPostElement.current.value;
        // if(results !== ''){
        //     console.log(results);
        //     props.addPost(results);
        //     props.updateNewPostText("");
        if(props.newPostText !== ''){
            // props.addPost();
            props.dispatch(addPostActionCreator());  
        }  
         
    };

    let onPostChange = () =>{
        let results = newPostElement.current.value;
        // props.updateNewPostText(results);
        let action = updateNewPostTextActionCreator(results);
        props.dispatch(action);
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
                               ref={newPostElement}
                               value={props.newPostText}              
                        />                        
                    </div>
                </div>
                <hr />
                <div className={classes.button}>
                    <button onClick={addPost}>Photo/Video</button>
                </div>
                
            </div>
        </div>
    );
}

export default ProfileInfo;