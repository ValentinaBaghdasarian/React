import { connect } from "react-redux";
import Message from './Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/reducers/dialog-reducer';
import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";



function WithRouter(Component){
    function ComponentWithRouterProp(props){
        let navigate = useNavigate();
        let location = useLocation();
        let params = useParams();

        return <Component {...props} router={{ location, navigate, params}} />
    }

    return ComponentWithRouterProp;
}

class MessageComponent extends React.Component{

    componentDidMount(){
        let userId = this.props.router.params.userId;
        console.log(userId);
    }

    render(){
        return (<Message {...this.props} userId={this.props.router.params.userId}/>)
    }
} 

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

const WithUrlDataContainerComponent = WithRouter(MessageComponent)

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);

export default MessageContainer;