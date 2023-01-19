import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/store';
import StoreContext from "../../../redux/StoreContext";


function MessagesContainer(props){

    


    return (
        <StoreContext.Consumer>{
            (store) => {
                let onSendMessage = () => store.dispatch(addMessageActionCreator());
                let onNewMessageChange = (messageText) =>{
                    store.dispatch(updateNewMessageTextActionCreator(messageText));
                };

                return <Messages updateNewMessageText={onNewMessageChange} addMessage={onSendMessage} dialog={store.getState().dialog}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;