import DivForPhoto from '../DivForPhoto/divForPhoto';
import classes from './friends.module.css';
import { NavLink } from 'react-router-dom';

function Friends(props){
    
    let friendElement = props.myInfo.friendsData.map(f => <DivForPhoto src={f.url} name={f.name}/> );


    return (
        <div className={classes.myFriends}>
            <div className={classes.titles}>
                <div className={classes.title}>
                    <NavLink to='/friends'><h3>Friends</h3></NavLink>
                    <div className={classes.inscription}>
                        countFriends friends
                    </div>
                </div>
                <div className={classes.allFriends}>
                <span>See all friends</span>
                </div>
            </div>
            <div className={classes.photos}>
               {friendElement}
            </div>
        </div>
    );
}

export default Friends;