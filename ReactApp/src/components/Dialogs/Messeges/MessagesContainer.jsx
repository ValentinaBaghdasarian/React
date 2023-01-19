import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/store';


function MessagesContainer(props){

    let onSendMessage = () => props.store.dispatch(addMessageActionCreator());

    let onNewMessageChange = (messageText) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(messageText));
    };


    return <Messages updateNewMessageText={onNewMessageChange} addMessage={onSendMessage} dialog={props.store.getState().dialog}/>
}

export default MessagesContainer;