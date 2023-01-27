import React from "react";
import classes from './Header.module.css';

function header(){
    return(
        <header className={classes.header}>
          <img src='	https://s3-img.pixpa.com/com/large/50172/50172-1558150337-logo.png' alt=''/>
        </header>
    );
}

export default header;