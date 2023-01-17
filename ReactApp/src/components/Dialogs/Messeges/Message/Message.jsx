import React from "react";
import classes from './Message.module.css';
import UserAvatar from '../../../Profile/UserAvatar/UserAvatar';

const Message = (props) => {
    return (
        <div className={classes.formMassage}>
            <div>
                <UserAvatar src='https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg'/>
            </div>
            <div className={classes.dialog}>
                {props.message}
            </div>
        </div>
        )
}

export default Message;