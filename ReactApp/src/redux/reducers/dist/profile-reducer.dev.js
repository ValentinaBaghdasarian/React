"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ADD_POST = 'ADD-POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
var initialState = {
  postsData: [{
    id: 1,
    src: 'https://s3-img.pixpa.com/com/500/50172/1609789578-730041-mg-6579.jpg',
    text: 'my sunshine',
    commentsData: [{
      id: 1,
      name: 'Anna Lucy',
      comment: "You are beautiful))",
      src: 'https://s3-img.pixpa.com/com/500/50172/1620766827-675978-mg-8890.jpg'
    }, {
      id: 2,
      name: 'Mia Le Da',
      comment: "Pretty girl",
      src: 'https://s3-img.pixpa.com/com/800/50172/1558057355-392466-mg-2766.jpg'
    }, {
      id: 3,
      name: 'Lucas',
      comment: 'Hi',
      src: 'https://celebsupdate.com/wp-content/uploads/2020/02/Chris-Hemsworth-Hollywood-Actor.jpg'
    }]
  }, {
    id: 2,
    src: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
    text: 'my sunshine',
    commentsData: [{
      id: 1,
      name: 'Anna Lucy',
      comment: "You are beautiful))",
      src: 'https://s3-img.pixpa.com/com/500/50172/1620766827-675978-mg-8890.jpg'
    }, {
      id: 2,
      name: 'Mia Le Da',
      comment: "Pretty girl",
      src: 'https://s3-img.pixpa.com/com/800/50172/1558057355-392466-mg-2766.jpg'
    }]
  }, {
    id: 3,
    src: 'https://s3-img.pixpa.com/com/500/50172/1609787761-805350-mg-1595.jpg',
    text: 'my sunshine',
    commentsData: []
  }, {
    id: 4,
    src: 'https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx',
    text: 'my sunshine',
    commentsData: []
  }, {
    id: 5,
    src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312415246_658788482284218_7301860167085711371_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=mGWGVqEN0_AAX9498Q0&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDbAnd67X-_ZV-YmEr4uULFB4lsNLK5uGipCKf3-OYBAw&oe=63BF6216',
    text: 'November is so different🍂.. dirty , naked , sloppy .. or maybe cozy and poetic? My attitude to November changes ten times during the day )',
    commentsData: [{
      id: 3,
      name: 'Lucas',
      comment: 'Hi',
      src: 'https://celebsupdate.com/wp-content/uploads/2020/02/Chris-Hemsworth-Hollywood-Actor.jpg'
    }]
  }],
  newPostText: '',
  myInfo: {
    photosData: [{
      id: 1,
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789544-454137-mg-0644.jpg'
    }, {
      id: 2,
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789556-674364-mg-0076.jpg'
    }, {
      id: 3,
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789553-574839-mg-0256.jpg'
    }, {
      id: 4,
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789550-69003-mg-1021-2.jpg'
    }, {
      id: 5,
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789548-385592-mg-0687.jpg'
    }, {
      id: 6,
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789546-373729-mg-0966.jpg'
    }, {
      id: 7,
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789544-620445-mg-0404.jpg'
    }, {
      id: 8,
      url: 'https://s3-img.pixpa.com/com/500/50172/1609787761-805350-mg-1595.jpg'
    }, {
      id: 9,
      url: 'https://s3-img.pixpa.com/com/500/50172/1609787782-536837-mg-2429.jpg'
    }],
    friendsData: [{
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
      name: 'Olivia',
      url: 'https://s3-img.pixpa.com/com/800/50172/1558057134-415642-mg-2610.jpg'
    }, {
      id: 7,
      name: 'Saphia',
      url: 'https://s3-img.pixpa.com/com/800/50172/1558057199-925075-mg-3279.jpg'
    }, {
      id: 8,
      name: 'Isabell',
      url: 'https://s3-img.pixpa.com/com/800/50172/1609789572-225554-mg-3214.jpg'
    }, {
      id: 9,
      url: 'https://www.themoviedb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg',
      name: 'Jack'
    }]
  }
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      var newPosts = {
        id: 6,
        src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312564812_658788478950885_8062167258836811753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=wF-3heRTHxwAX_r5DxV&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBsgRBEnL2RnMY10iFYRk6LfIBO7u3o6w_6buzYQAq41Q&oe=63BE712E',
        text: state.newPostText,
        commentsData: [{
          id: 4,
          name: "Andrea Csuta",
          comment: 'I am so grateful that you show this gorgeous world trough your eyes to us ! 🙏❤️',
          src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312792756_650196539810079_453434720747196609_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=JDV4AnCoQcEAX8EPjmK&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDL5_BjLiA3SG44hbD71dVH_Gu88N00fb5_8YxCBmCdqw&oe=63BF8408'
        }]
      };
      state.postsData.unshift(newPosts);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

var _default = profileReducer;
exports["default"] = _default;