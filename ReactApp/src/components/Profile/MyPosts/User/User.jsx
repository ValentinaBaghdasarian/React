import classes from './User.module.css';
import UserAvatar from '../../UserAvatar/UserAvatar';


function User(props){
    return (
        <div className={classes.user}>
            <UserAvatar src='https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613'/>
            <div className={classes.userName}>
                <span>{props.name}</span>
            </div>
            <div className={classes.postDate}>
                <span>19 september</span>
            </div>
        </div>
    );
}

export default User;