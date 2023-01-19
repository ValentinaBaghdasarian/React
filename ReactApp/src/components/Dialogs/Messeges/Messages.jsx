import React from "react";
import classes from './Messeges.module.css';
import Message from "./Message/Message";

function Messages(props){
    
    // let state = props.store.getState().dialog;
    let messageElements = props.dialog.messagesData.map(m => <Message message={m.message}/>);
    
    let newMessageBody = props.dialog.newMessageBody;

    let onSendMessage = () =>{
        if(newMessageBody !== ''){
            // props.store.dispatch(addMessageActionCreator());
            props.addMessage();
        }
    };

    let onNewMessageChange = (e) =>{
        let messageText = e.target.value;
        // props.store.dispatch(updateNewMessageTextActionCreator(messageText));
        props.updateNewMessageText(messageText);
    };


    return (
        <div className={classes.messages}>
            <div className={classes.messageDisplay}>
                {messageElements}
            </div>
            <div className={classes.messageArea}>                      
                <input className={classes.area} type='text' placeholder="Aa"
                    onChange={onNewMessageChange} value={props.dialog.newMessageBody} />                        
                <input className={classes.submit} type="submit" value='Send' onClick={onSendMessage} />
            </div>   
        </div>
    );
}

export default Messages;