import React from 'react';
import Dialog from './Dialog/Dialog';
import Messages from './Messeges/Messages';
import classes from './Dialogs.module.css';

function Dialogs(props){
    return(
        <div className={classes.dialogs}>
            <Dialog store={props.store}/>
            <Messages store={props.store}/>
        </div>
    );
}

export default Dialogs;