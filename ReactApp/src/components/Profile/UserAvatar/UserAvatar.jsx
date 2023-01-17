import classes from "./UserAvatar.module.css";

function UserAvatar(props){
    return (
        <div className={classes.postAvatar}>
            <img src={props.src}/>
        </div>
    );
}

export default UserAvatar;