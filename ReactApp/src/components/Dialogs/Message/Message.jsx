import React from "react";
import classes from './Message.module.css';
import UserAvatar from '../../Profile/UserAvatar/UserAvatar';

function Messages(props){
    const href = window.location.href;
    let userId = (+href[href.search(/(\/\d+)*$/g) + 1]);

    let onSendMessage = () =>{
        if(props.dialog.newMessageBody !== ''){
            props.addMessage(userId);
        }
    };

    let onNewMessageChange = (e) =>{
        let messageText = e.target.value;
        props.updateNewMessageText(messageText);
    };


    

    return (
        <div className={classes.messages}>
            <div className={classes.messageDisplay}>
            {props.dialog.messagesData.map(message => (message.id === userId ? <div key={message.id} >
                    
                    <div>
                        {message.id === userId ?  message.message.map(mess =><div className={classes.formMassage}>
                            <div>
                                <UserAvatar src={props.dialog.dialogData[userId - 1].url}/>
                            </div>
                             <div  className={classes.dialog}>{mess.text}</div> </div>) : '' }
                    </div>
                </div> : '')
                 
            )}
            </div>
            <div className={classes.messageArea}>                      
                <input className={classes.sendMessageInp} type='text' placeholder="Aa"
                    onChange={onNewMessageChange} value={props.dialog.newMessageBody} />                        
                <input className={classes.submit} type="submit" value='Send' onClick={onSendMessage} />
            </div>   
        </div>
    );
}

export default Messages;