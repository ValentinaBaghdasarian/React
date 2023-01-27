import React from "react";
import classes from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

function Dilaog(props){
    return (
        <div className={classes.dialogsItems}>
                {props.dialogData.map(usersDialog => <div key={usersDialog.id} className={`${classes.item} ${classes.active}`}>
                    <div className={classes.img}>
                        <img src={usersDialog.url} alt=''/>
                    </div>
                    <div className={classes.link}>
                        <NavLink to={`/dialogs/${usersDialog.id}`} className={({isActive}) => (isActive ? classes.active : classes.item)}>{usersDialog.name} </NavLink>
                    </div>
                </div>) }  
        </div>
    );
}

export default Dilaog;