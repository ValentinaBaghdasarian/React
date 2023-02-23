import {profileAPI} from '../../api/api';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE_NEW_COMMENT_TEXT';

const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';

const COM_LIKE = 'COM_LIKE';
const COM_DISLIKE = 'COM_DISLIKE';


const SET_FRIENDS = 'SET_FRIENDS';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_POSTS = 'SET_POSTS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
        postsData: [],
        newPostText: '',
        newCommentText: '',
        photosData: [],
        friendsData: [],
        profile: {
            userId: 1,
            fullName: 'Sofia Stuart',
            photos:{
                small: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613',
                large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
              },
            status: 'I like SUN'
             

        },
        status: ''
};

const profileReducer = (state = initialState, action) => {
    let copyState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case  ADD_POST:
            let newPosts = {
                id: Math.random(),
                src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312564812_658788478950885_8062167258836811753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=wF-3heRTHxwAX_r5DxV&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBsgRBEnL2RnMY10iFYRk6LfIBO7u3o6w_6buzYQAq41Q&oe=63BE712E',
                text: state.newPostText,
                commentsData: [
                    {
                        id: Math.random(),
                        name: "Andrea Csuta",
                        comment: 'I am so grateful that you show this gorgeous world trough your eyes to us ! 🙏❤️',
                        src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312792756_650196539810079_453434720747196609_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=JDV4AnCoQcEAX8EPjmK&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDL5_BjLiA3SG44hbD71dVH_Gu88N00fb5_8YxCBmCdqw&oe=63BF8408',
                    }
                ],
                liked: true,
            };   
            copyState.postsData.unshift(newPosts);
            copyState.newPostText = '';
            return copyState;
        case UPDATE_NEW_POST_TEXT:
            copyState.newPostText = action.newText;
            return copyState;
        case ADD_COMMENT:
            let newComment =  {
                id: 4,
                name: 'Mia',
                comment: state.newCommentText,
                src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/116487761_1709970135832188_2623279487738365785_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSnYTPPWyNcAX_30MCJ&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfC_c5AECGXNXSLvvMUvq29dMZwwIGBnVpGsNOrpS54iAw&oe=63F3B518',
                liked: false,
            };
            copyState.postsData.map(post =>{
                if(post.id === action.postID){
                    
                   return {post,commentsData:post.commentsData.push(newComment)};
                }
                return post;
            });
            copyState.newCommentText = '';
            return  copyState;
        case UPDATE_NEW_COMMENT_TEXT:            
            copyState.newCommentText = action.newText;
            return copyState;
        case LIKE:
            copyState.postsData.map(post => {
                 if(post.id === action.postID){
                    post.liked = false;
                    post.likesCount = post.likesCount - 1;
                     return  post;
                     
                 }
                 return post;    
             });
            return copyState;
        case DISLIKE: 
            copyState.postsData.map(post => {
                 if(post.id === action.postID){
                    post.liked = true;
                    post.likesCount = post.likesCount + 1;
                     return post;
                 }
                 return post;
             });
            return copyState;
        case COM_LIKE:
            debugger
            copyState.postsData.map(post => {
                post.commentsData.map(com => {
                    if(com.id === action.commentID){
                        com.liked = false;
                        return com;
                    }
                });
            });
            return copyState;
        case COM_DISLIKE:
            copyState.postsData.map(post => {
                post.commentsData.map(com => {
                    if(com.id === action.commentID){
                        com.liked = true;
                        return com;
                    }
                });
            });
            return copyState;
        case SET_FRIENDS:
            return ({...state, friendsData: action.friendsData});
        case SET_PHOTOS:
            return ({...state, photosData: action.photosData});
        case SET_POSTS:
            return ({...state, postsData: action.postsData});    
        case SET_USER_PROFILE:
            return ({...state, profile: action.profile});
        case SET_STATUS:
            return ({...state, status:  action.status});
        default: 
            return state;
    }
};



export let addPostActionCreator = () =>({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => (
            { type: UPDATE_NEW_POST_TEXT,
              newText: text,
            }
);
export let addCommentAC = (postID) => ({type: ADD_COMMENT, postID});
export let updateNewCommentTextAC = (newText, postID) => (
    { type: UPDATE_NEW_COMMENT_TEXT,
      newText: newText,
      postID
    }
);
export let likeAC = (postID) => ({type: LIKE, postID});
export let disLikeAC = (postID) => ({type: DISLIKE, postID});
export let comLikeAC = (commentID) => ({type: COM_LIKE, commentID});
export let comDisLikeAC = (commentID) => ({type: COM_DISLIKE, commentID});
export let setPostsAC = (postsData) => ({type: SET_POSTS, postsData});

export let setFriends = (friendsData) => ({type: SET_FRIENDS, friendsData});
export let setPhotos = (photosData) => ({type: SET_PHOTOS, photosData});

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export let setStatus = (status) => ({type: SET_STATUS, status});

// thunk

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => { 
            dispatch(setUserProfile(response.data));
        });
    };
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => { 
            dispatch(setStatus(response.data));
        });
    };
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status));
            } 
        })
    }
}
 
export default profileReducer;