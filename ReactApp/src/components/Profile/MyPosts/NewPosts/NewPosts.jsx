import classes from './NewPosts.module.css';
import Comment from '../Comments/Comment';
import User from '../User/User';
import PublishedPost from '../PublishedPost/PublishedPost';
import UserAvatar from '../../UserAvatar/UserAvatar';




function NewPosts(props){
        
    return (
        <div className={classes.myPosts}>
            <User name='Sofia Stuart'/>
            <div className={classes.formForPost}>
                <PublishedPost src={props.src} text={props.text}/>
            </div>  
            <div className={classes.coments}>
                { props.CommentElements }
                
               <div className={classes.addCom}>
                    <UserAvatar src='https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613'/>
                    <div className={classes.addComItem}>
                        <input className={classes.text} placeholder='Write a comment...'/>
                    </div> 
                </div> 
            </div>
            
        </div> 
    );
}

export default NewPosts;