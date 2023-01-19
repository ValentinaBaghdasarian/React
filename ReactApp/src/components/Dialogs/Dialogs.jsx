import React from 'react';
import StoreContext from '../../redux/StoreContext';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import MessagesContainer from './Messeges/MessagesContainer';

function Dialogs(props){
    
        return(
            <div className={classes.dialogs}>
                <Dialog />
                <MessagesContainer/>
            </div>
        );  
    
    
    
}

export default Dialogs;