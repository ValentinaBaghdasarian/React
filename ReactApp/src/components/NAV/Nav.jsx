import React from "react";
import  classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';


function nav(){
    return (
        <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to="/profile"  className={({ isActive }) => (isActive ? classes.active : classes.item)}>Profile</NavLink>
          </div>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/dialogs" className={({ isActive }) => (isActive ? classes.active : classes.item)}>Messages</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/news'>News</NavLink>
          </div>
          <div className={classes.item}>
            <a>Music</a>
          </div>
          <div className={classes.item}>
            <a>Setting</a>
          </div>
        </nav>
    );
}

export default nav;