"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateStatus = exports.getStatus = exports.getProfile = exports.setStatus = exports.setUserProfile = exports.setPhotos = exports.setFriends = exports.setPostsAC = exports.comDisLikeAC = exports.comLikeAC = exports.disLikeAC = exports.likeAC = exports.updateNewCommentTextAC = exports.addCommentAC = exports.updateNewPostTextActionCreator = exports.addPostActionCreator = void 0;

var _api = require("../../api/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_POST = 'ADD-POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
var ADD_COMMENT = 'ADD_COMMENT';
var UPDATE_NEW_COMMENT_TEXT = 'UPDATE_NEW_COMMENT_TEXT';
var LIKE = 'LIKE';
var DISLIKE = 'DISLIKE';
var COM_LIKE = 'COM_LIKE';
var COM_DISLIKE = 'COM_DISLIKE';
var SET_FRIENDS = 'SET_FRIENDS';
var SET_PHOTOS = 'SET_PHOTOS';
var SET_POSTS = 'SET_POSTS';
var SET_USER_PROFILE = 'SET_USER_PROFILE';
var SET_STATUS = 'SET_STATUS';
var initialState = {
  postsData: [],
  newPostText: '',
  newCommentText: '',
  photosData: [],
  friendsData: [],
  profile: {
    userId: 1,
    fullName: 'Sofia Stuart',
    photos: {
      small: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613',
      large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    },
    status: 'I like SUN'
  },
  status: ''
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var copyState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ADD_POST:
      var newPosts = {
        id: Math.random(),
        src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312564812_658788478950885_8062167258836811753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=wF-3heRTHxwAX_r5DxV&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBsgRBEnL2RnMY10iFYRk6LfIBO7u3o6w_6buzYQAq41Q&oe=63BE712E',
        text: state.newPostText,
        commentsData: [{
          id: Math.random(),
          name: "Andrea Csuta",
          comment: 'I am so grateful that you show this gorgeous world trough your eyes to us ! 🙏❤️',
          src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312792756_650196539810079_453434720747196609_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=JDV4AnCoQcEAX8EPjmK&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDL5_BjLiA3SG44hbD71dVH_Gu88N00fb5_8YxCBmCdqw&oe=63BF8408'
        }],
        liked: true
      };
      copyState.postsData.unshift(newPosts);
      copyState.newPostText = '';
      return copyState;

    case UPDATE_NEW_POST_TEXT:
      copyState.newPostText = action.newText;
      return copyState;

    case ADD_COMMENT:
      var newComment = {
        id: 4,
        name: 'Mia',
        comment: state.newCommentText,
        src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/116487761_1709970135832188_2623279487738365785_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSnYTPPWyNcAX_30MCJ&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfC_c5AECGXNXSLvvMUvq29dMZwwIGBnVpGsNOrpS54iAw&oe=63F3B518',
        liked: false
      };
      copyState.postsData.map(function (post) {
        if (post.id === action.postID) {
          return {
            post: post,
            commentsData: post.commentsData.push(newComment)
          };
        }

        return post;
      });
      copyState.newCommentText = '';
      return copyState;

    case UPDATE_NEW_COMMENT_TEXT:
      copyState.newCommentText = action.newText;
      return copyState;

    case LIKE:
      copyState.postsData.map(function (post) {
        if (post.id === action.postID) {
          post.liked = false;
          post.likesCount = post.likesCount - 1;
          return post;
        }

        return post;
      });
      return copyState;

    case DISLIKE:
      copyState.postsData.map(function (post) {
        if (post.id === action.postID) {
          post.liked = true;
          post.likesCount = post.likesCount + 1;
          return post;
        }

        return post;
      });
      return copyState;

    case COM_LIKE:
      debugger;
      copyState.postsData.map(function (post) {
        post.commentsData.map(function (com) {
          if (com.id === action.commentID) {
            com.liked = false;
            return com;
          }
        });
      });
      return copyState;

    case COM_DISLIKE:
      copyState.postsData.map(function (post) {
        post.commentsData.map(function (com) {
          if (com.id === action.commentID) {
            com.liked = true;
            return com;
          }
        });
      });
      return copyState;

    case SET_FRIENDS:
      return _objectSpread({}, state, {
        friendsData: action.friendsData
      });

    case SET_PHOTOS:
      return _objectSpread({}, state, {
        photosData: action.photosData
      });

    case SET_POSTS:
      return _objectSpread({}, state, {
        postsData: action.postsData
      });

    case SET_USER_PROFILE:
      return _objectSpread({}, state, {
        profile: action.profile
      });

    case SET_STATUS:
      return _objectSpread({}, state, {
        status: action.status
      });

    default:
      return state;
  }
};

var addPostActionCreator = function addPostActionCreator() {
  return {
    type: ADD_POST
  };
};

exports.addPostActionCreator = addPostActionCreator;

var updateNewPostTextActionCreator = function updateNewPostTextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

exports.updateNewPostTextActionCreator = updateNewPostTextActionCreator;

var addCommentAC = function addCommentAC(postID) {
  return {
    type: ADD_COMMENT,
    postID: postID
  };
};

exports.addCommentAC = addCommentAC;

var updateNewCommentTextAC = function updateNewCommentTextAC(newText, postID) {
  return {
    type: UPDATE_NEW_COMMENT_TEXT,
    newText: newText,
    postID: postID
  };
};

exports.updateNewCommentTextAC = updateNewCommentTextAC;

var likeAC = function likeAC(postID) {
  return {
    type: LIKE,
    postID: postID
  };
};

exports.likeAC = likeAC;

var disLikeAC = function disLikeAC(postID) {
  return {
    type: DISLIKE,
    postID: postID
  };
};

exports.disLikeAC = disLikeAC;

var comLikeAC = function comLikeAC(commentID) {
  return {
    type: COM_LIKE,
    commentID: commentID
  };
};

exports.comLikeAC = comLikeAC;

var comDisLikeAC = function comDisLikeAC(commentID) {
  return {
    type: COM_DISLIKE,
    commentID: commentID
  };
};

exports.comDisLikeAC = comDisLikeAC;

var setPostsAC = function setPostsAC(postsData) {
  return {
    type: SET_POSTS,
    postsData: postsData
  };
};

exports.setPostsAC = setPostsAC;

var setFriends = function setFriends(friendsData) {
  return {
    type: SET_FRIENDS,
    friendsData: friendsData
  };
};

exports.setFriends = setFriends;

var setPhotos = function setPhotos(photosData) {
  return {
    type: SET_PHOTOS,
    photosData: photosData
  };
};

exports.setPhotos = setPhotos;

var setUserProfile = function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  };
};

exports.setUserProfile = setUserProfile;

var setStatus = function setStatus(status) {
  return {
    type: SET_STATUS,
    status: status
  };
}; // thunk


exports.setStatus = setStatus;

var getProfile = function getProfile(userId) {
  return function (dispatch) {
    _api.profileAPI.getProfile(userId).then(function (response) {
      dispatch(setUserProfile(response.data));
    });
  };
};

exports.getProfile = getProfile;

var getStatus = function getStatus(userId) {
  return function (dispatch) {
    _api.profileAPI.getStatus(userId).then(function (response) {
      dispatch(setStatus(response.data));
    });
  };
};

exports.getStatus = getStatus;

var updateStatus = function updateStatus(status) {
  return function (dispatch) {
    _api.profileAPI.updateStatus(status).then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

exports.updateStatus = updateStatus;
var _default = profileReducer;
exports["default"] = _default;