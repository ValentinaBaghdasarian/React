const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogReducer = (state, action) => {
    switch(action.type === SEND_MESSAGE){
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            state.messagesData.push({id: 4, message: body});
        state.newMessageBody = '';
        return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageText;
            return state;
        default: 
            return state;
    }
};

export default dialogReducer;