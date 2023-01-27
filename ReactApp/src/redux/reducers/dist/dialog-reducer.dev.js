"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewMessageTextActionCreator = exports.addMessageActionCreator = void 0;
var SEND_MESSAGE = 'ADD-MESSAGE';
var UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
var initialState = {
  dialogData: [{
    id: 1,
    name: 'James',
    url: 'https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg'
  }, {
    id: 2,
    name: 'William',
    url: 'https://i.pinimg.com/736x/a9/2f/55/a92f55fb8ce0513db6f66fe331de5b72.jpg'
  }, {
    id: 3,
    name: 'Lucy',
    url: 'https://s3-img.pixpa.com/com/1200/50172/1558057258-167951-mg-2830.jpg'
  }, {
    id: 4,
    name: 'Henry',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexMqy5-eMyTxyPieNs8VbA_tLJWnOZ3z1AA&usqp=CAU'
  }, {
    id: 5,
    name: 'Lucas',
    url: 'https://www.pinkvilla.com/imageresize/leonardo_dicaprio_0.jpeg?width=752&t=pvorg'
  }, {
    id: 6,
    name: 'Saphia',
    url: 'https://s3-img.pixpa.com/com/800/50172/1558057199-925075-mg-3279.jpg'
  }, {
    id: 7,
    name: 'Olivia',
    url: 'https://s3-img.pixpa.com/com/800/50172/1558057134-415642-mg-2610.jpg'
  }, {
    id: 8,
    name: 'Isabell',
    url: 'https://s3-img.pixpa.com/com/800/50172/1609789572-225554-mg-3214.jpg'
  }],
  messagesData: [{
    id: 1,
    message: [{
      text: 'Hi'
    }, {
      text: 'Hi'
    }, {
      text: 'Hi'
    }, {
      text: 'Hi'
    }]
  }, {
    id: 2,
    message: [{
      text: 'Hi my dear'
    }, {
      text: 'Hi my dear'
    }, {
      text: 'Hi my dear'
    }, {
      text: 'Hi my dear'
    }]
  }, {
    id: 3,
    message: [{
      text: 'You are welcome!!!'
    }, {
      text: 'You are welcome!!!'
    }, {
      text: 'You are welcome!!!'
    }, {
      text: 'You are welcome!!!'
    }]
  }, {
    id: 4,
    message: []
  }, {
    id: 5,
    message: []
  }, {
    id: 6,
    message: []
  }, {
    id: 7,
    message: []
  }, {
    id: 8,
    message: []
  }],
  newMessageBody: ''
};

var dialogReducer = function dialogReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var copyState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case SEND_MESSAGE:
      var body = copyState.newMessageBody;
      copyState.messagesData.map(function (mess) {
        if (mess.id === action.userId) {
          mess.message.push({
            text: body
          });
          copyState.newMessageBody = '';
          return copyState;
        }
      });
      return copyState;

    case UPDATE_NEW_MESSAGE_BODY:
      copyState.newMessageBody = action.newMessageText;
      return copyState;

    default:
      return state;
  }
};

var addMessageActionCreator = function addMessageActionCreator(userId) {
  return {
    type: SEND_MESSAGE,
    userId: userId
  };
};

exports.addMessageActionCreator = addMessageActionCreator;

var updateNewMessageTextActionCreator = function updateNewMessageTextActionCreator(messageText) {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageText: messageText
  };
};

exports.updateNewMessageTextActionCreator = updateNewMessageTextActionCreator;
var _default = dialogReducer;
exports["default"] = _default;