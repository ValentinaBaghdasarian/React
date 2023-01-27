import { connect } from "react-redux";
import Message from './Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/reducers/dialog-reducer';

let mapStateToProps = (state) =>{
    return {
        dialog: state.dialog,
    };
};

let mapDispatchToProps = (dispatch) =>{
    return {
        addMessage: (userId) => dispatch(addMessageActionCreator(userId)),
        updateNewMessageText: (messageText) => dispatch(updateNewMessageTextActionCreator(messageText)),
    };
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;