import {addCommentAC , updateNewCommentTextAC, likeAC, disLikeAC, comLikeAC, comDisLikeAC, setPostsAC} from '../../../redux/reducers/profile-reducer';
import { connect } from 'react-redux';
import Post from './Posts';


let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        postsData: state.profile.postsData
    };
 };

let mapDispatchToProps = (dispatch) => {
    return {
        like: (postID) => dispatch(likeAC(postID)),
        disLike: (postID) => dispatch(disLikeAC(postID)),

        updateNewCommentText: (newText, postId) => {dispatch(updateNewCommentTextAC(newText, postId));},
        addComment: (postId)=>{dispatch(addCommentAC(postId));},

        comLike: (commentID) => dispatch(comLikeAC(commentID)),
        comDisLike: (commentID) => dispatch(comDisLikeAC(commentID)),
        setPosts: (postData) => dispatch(setPostsAC(postData)),        
    };
};

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);