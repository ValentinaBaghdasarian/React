import React from 'react';
import classes from './Dialogs.module.css';
import DialogContainer from './Dialog/DialogContainer';
import MessageContainer from './Message/MessageContainer';

function Dialogs(){
        return(
            <div className={classes.dialogs}>
                <DialogContainer />
                <MessageContainer/>    
            </div>
        );  
    
    
    
}

export default Dialogs;