import classes from './Comment.module.css';
import UserAvatar from '../../UserAvatar/UserAvatar';


function Comment(props){
    return(
        <div className={classes.comments}>
            <div className={classes.item}>       
                <UserAvatar src={props.src}/>
                <div className={classes.name_com}>
                    <div className={classes.userName}>
                        <span>{props.name}</span>
                    </div>
                    <div className={classes.comment}>  
                        {props.comment} 
                    </div>
                </div>
                <div className={classes.comLike}> 
                    <span>Like</span>
                    <span>Reply</span>
                </div>
            </div> 
        </div>
    );
}



export default Comment;