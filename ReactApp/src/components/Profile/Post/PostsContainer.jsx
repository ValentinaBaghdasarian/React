import {addCommentAC , updateNewCommentTextAC, likeAC, disLikeAC} from '../../../redux/reducers/profile-reducer';
import { connect } from 'react-redux';
import Post from './Posts';


let mapStateToProps = (state) => {
    return {profile: state.profile};
 };
//  let mapDispatchToProps = (dispatch) => {
//      return {
//         updateNewCommentText: (newText, postId) => {dispatch(updateNewCommentTextAC(newText, postId));},
//         addComment: (postId)=>{dispatch(addCommentAC(postId));},

//         like: (postID) => {dispatch(likeAC(postID));},
//         disLike: (postID) => {dispatch(disLikeAC(postID));},
//      };
//  };

 let mapDispatchToProps = (dispatch) => {
    return {
        like: (postID) => dispatch(likeAC(postID)),
        disLike: (postID) => dispatch(disLikeAC(postID)),

        updateNewCommentText: (newText, postId) => {dispatch(updateNewCommentTextAC(newText, postId));},
        addComment: (postId)=>{dispatch(addCommentAC(postId));},
    };
};

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);