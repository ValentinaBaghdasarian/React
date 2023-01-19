import profileReducer from './reducers/profile-reducer';
import dialogReducer from './reducers/dialog-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let store = {
    _state: {
        dialog: {
            dialogData: [
                {id: 1, 
                name:'James', 
                url: 'https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg'
                },
                {id: 2, 
                name:'William',
                url: 'https://i.pinimg.com/736x/a9/2f/55/a92f55fb8ce0513db6f66fe331de5b72.jpg'
                },
                {id: 3, 
                name:'Lucy',
                url: 'https://s3-img.pixpa.com/com/1200/50172/1558057258-167951-mg-2830.jpg'
                },
                {id: 4, 
                name:'Henry',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexMqy5-eMyTxyPieNs8VbA_tLJWnOZ3z1AA&usqp=CAU'
                },
                {id: 5,
                name:'Lucas',
                url: 'https://www.pinkvilla.com/imageresize/leonardo_dicaprio_0.jpeg?width=752&t=pvorg'    
                },
                {id: 6, 
                name:'Saphia',
                url: 'https://s3-img.pixpa.com/com/800/50172/1558057199-925075-mg-3279.jpg'
                },
                {id: 7,
                name:'Olivia',
                url: 'https://s3-img.pixpa.com/com/800/50172/1558057134-415642-mg-2610.jpg'
                },
                {id: 8,
                name:'Isabell',
                url: 'https://s3-img.pixpa.com/com/800/50172/1609789572-225554-mg-3214.jpg'
                }
              ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi my dear'},
                {id: 3, message: 'You are welcome!!!'}
              ],
            newMessageBody: '',
        },
        profile: {
            postsData: [
                {
                    id: 1,
                    src: 'https://s3-img.pixpa.com/com/500/50172/1609789578-730041-mg-6579.jpg',
                    text: 'my sunshine',
                    commentsData: [
                        {
                            id: 1,
                            name: 'Anna Lucy',
                            comment: "You are beautiful))",
                            src: 'https://s3-img.pixpa.com/com/500/50172/1620766827-675978-mg-8890.jpg'
                        },
                        {
                            id: 2,
                            name: 'Mia Le Da',
                            comment: "Pretty girl",
                            src: 'https://s3-img.pixpa.com/com/800/50172/1558057355-392466-mg-2766.jpg'
                        },
                        {
                            id: 3,
                            name: 'Lucas',
                            comment: 'Hi',
                            src: 'https://celebsupdate.com/wp-content/uploads/2020/02/Chris-Hemsworth-Hollywood-Actor.jpg'
                        }
                    ]
                },
                {
                    id: 2,
                    src: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
                    text: 'my sunshine',
                    commentsData: [
                        {
                            id: 1,
                            name: 'Anna Lucy',
                            comment: "You are beautiful))",
                            src: 'https://s3-img.pixpa.com/com/500/50172/1620766827-675978-mg-8890.jpg'
                        },
                        {
                            id: 2,
                            name: 'Mia Le Da',
                            comment: "Pretty girl",
                            src: 'https://s3-img.pixpa.com/com/800/50172/1558057355-392466-mg-2766.jpg'
                        },
                    ]
                },
                {
                    id: 3,
                    src: 'https://s3-img.pixpa.com/com/500/50172/1609787761-805350-mg-1595.jpg',
                    text: 'my sunshine',
                    commentsData:[]
                },
                {
                    id: 4,
                    src: 'https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx',
                    text: 'my sunshine',
                    commentsData:[]
                },
                {
                    id: 5,
                    src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312415246_658788482284218_7301860167085711371_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=mGWGVqEN0_AAX9498Q0&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDbAnd67X-_ZV-YmEr4uULFB4lsNLK5uGipCKf3-OYBAw&oe=63BF6216',
                    text: 'November is so different🍂.. dirty , naked , sloppy .. or maybe cozy and poetic? My attitude to November changes ten times during the day )',
                    commentsData:[
                        {
                            id: 3,
                            name: 'Lucas',
                            comment: 'Hi',
                            src: 'https://celebsupdate.com/wp-content/uploads/2020/02/Chris-Hemsworth-Hollywood-Actor.jpg'
                        }
                    ]
                },
            ],
            newPostText: '',
            myInfo: {
                photosData: [
                    {id: 1, 
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789544-454137-mg-0644.jpg'
                    },
                    {id: 2, 
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789556-674364-mg-0076.jpg'
                    },
                    {id: 3, 
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789553-574839-mg-0256.jpg'
                    },
                    {id: 4, 
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789550-69003-mg-1021-2.jpg'
                    },
                    {id: 5,
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789548-385592-mg-0687.jpg'    
                    },
                    {id: 6, 
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789546-373729-mg-0966.jpg'
                    },
                    {id: 7,
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789544-620445-mg-0404.jpg'
                    },
                    {id: 8,
                    url: 'https://s3-img.pixpa.com/com/500/50172/1609787761-805350-mg-1595.jpg'
                    },
                    {id: 9,
                    url: 'https://s3-img.pixpa.com/com/500/50172/1609787782-536837-mg-2429.jpg',
                    },
                ],
    
                friendsData: [
                    {id: 1, 
                    name:'James', 
                    url: 'https://media.newstrack.in/uploads/entertainment-news/hollywood-news/Dec/25/big_thumb/ghh1_5e0330bc40062.jpg'
                    },
                    {id: 2, 
                    name:'William',
                    url: 'https://i.pinimg.com/736x/a9/2f/55/a92f55fb8ce0513db6f66fe331de5b72.jpg'
                    },
                    {id: 3, 
                    name:'Lucy',
                    url: 'https://s3-img.pixpa.com/com/1200/50172/1558057258-167951-mg-2830.jpg'
                    },
                    {id: 4, 
                    name:'Henry',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexMqy5-eMyTxyPieNs8VbA_tLJWnOZ3z1AA&usqp=CAU'
                    },
                    {id: 5,
                    name:'Lucas',
                    url: 'https://www.pinkvilla.com/imageresize/leonardo_dicaprio_0.jpeg?width=752&t=pvorg'    
                    },
                    {id: 6, 
                    name:'Olivia',
                    url: 'https://s3-img.pixpa.com/com/800/50172/1558057134-415642-mg-2610.jpg'
                    },
                    {id: 7,
                    name:'Saphia',
                    url: 'https://s3-img.pixpa.com/com/800/50172/1558057199-925075-mg-3279.jpg'
                    },
                    {id: 8,
                    name:'Isabell',
                    url: 'https://s3-img.pixpa.com/com/800/50172/1609789572-225554-mg-3214.jpg'
                    },
                    {id: 9,
                    url: 'https://www.themoviedb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg',
                    name:'Jack'
                    },
                ]
            }
        }
        
    },
    _rerenderEntireTree(){ // 
    },

    getState(){ // վերադարձնում է սթեյթը
        return this._state;
    },

    subscribe(observer){    // index.js ֆայլում rerenderEntireTree կոմպոնենտը կանչելու համար ստեղծվել է subscribe ֆունկցիան որը state.js ֆայլում նկարագրված rerenderEntireTree ֆունկցիային տալիս է index.js ֆայլում նկարագրված rerenderEntireTree ֆունկցիան , որը կանչվում է index.js ֆայլում
        this._rerenderEntireTree = observer;
    },

    
    dispatch(action){ // action is object
        this._state.profile = profileReducer(this._state.profile, action); 
        this._rerenderEntireTree(this._state);

        // this._state.dialog = dialogReducer(this._state.dialog, action);

        this._state.dialog = dialogReducer(this._state.dialog, action);
        this._rerenderEntireTree(this._state);
    }
};

 

export let addPostActionCreator = () =>({type: ADD_POST});


export let updateNewPostTextActionCreator = (text) => (
            { type: UPDATE_NEW_POST_TEXT,
              newText: text,
            }
);

export let addMessageActionCreator = () =>({type: SEND_MESSAGE});

export let updateNewMessageTextActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageText: messageText, 
    };
};





window.store = store;
// export default store;