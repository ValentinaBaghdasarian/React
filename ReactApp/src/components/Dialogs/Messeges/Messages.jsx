import React from "react";
import classes from './Messeges.module.css';
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/state";

function Messages(props){
    debugger
    let state = props.store.getState().dialog;
    let messageElements = state.messagesData.map(m => <Message message={m.message}/>);
    
    let newMessageBody = state.newMessageBody;

    let onSendMessage = () =>{
        if(newMessageBody !== ''){
            props.store.dispatch(addMessageActionCreator());
        }
    };

    let onNewMessageChange = (e) =>{
        let messageText = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(messageText));
    };


    return (
        <div className={classes.messages}>
            <div className={classes.messageDisplay}>
                {messageElements}
            </div>
            <div className={classes.messageArea}>                      
                <input className={classes.area} type='text' placeholder="Aa"
                    onChange={onNewMessageChange} value={state.newMessageBody} />                        
                <input className={classes.submit} type="submit" value='Send' onClick={onSendMessage} />
            </div>   
        </div>
    );
}

export default Messages;