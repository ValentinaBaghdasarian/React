import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import MessagesContainer from './Messeges/MessagesContainer';

function Dialogs(props){
    return(
        <div className={classes.dialogs}>
            <Dialog store={props.store}/>
            <MessagesContainer store={props.store}/>
        </div>
    );
}

export default Dialogs;