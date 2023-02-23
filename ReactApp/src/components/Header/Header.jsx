import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

function header(props){
    return(
        <header className={classes.header}>
          <img src='https://s3-img.pixpa.com/com/large/50172/50172-1558150337-logo.png' alt=''/>
            <div className={classes.login}>
              {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default header;