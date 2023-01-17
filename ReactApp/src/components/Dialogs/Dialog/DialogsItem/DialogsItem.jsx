import React from "react";
import classes from '../Dialog.module.css';
import {NavLink} from 'react-router-dom';



const DialogsItem = (props)=>{
    let path = `/dialogs/${props.id}`;
    let url = `${props.url}`;
    return (
        <div className={`${classes.item} ${classes.active}`}>
                <div className={classes.img}>
                    <img src={url}/>
                </div>
                <div className={classes.link}>
                    <NavLink to={path} className={({isActive}) => (isActive ? classes.active : classes.item)}>{props.name}</NavLink>
                </div>
        </div>
    )
}


export default DialogsItem;
