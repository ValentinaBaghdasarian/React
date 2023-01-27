const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE_NEW_COMMENT_TEXT';

const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';

let initialState = {
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
                    },
                ],
                liked: true,
                likesCount: 124,
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
                ],
                liked: false,
                likesCount: 213,
            },
            {
                id: 3,
                src: 'https://s3-img.pixpa.com/com/500/50172/1609787761-805350-mg-1595.jpg',
                text: 'my sunshine',
                commentsData:[],
                liked: true,
                likesCount: 154,
            },
            {
                id: 4,
                src: 'https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx',
                text: 'my sunshine',
                commentsData:[],
                liked: true,
                likesCount: 181,
            },
            {
                id: 5,
                src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/81699035_1660505584111977_2095246014508722499_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5wEgzgz0o-sAX-Tm3hD&_nc_ht=scontent.fevn5-1.fna&oh=00_AfA7mOpxxY1PiYs5VwQyPZCsTV1gGRh3VBiYiGkG5kODmg&oe=63F33E5F',
                text: 'November is so different🍂.. dirty , naked , sloppy .. or maybe cozy and poetic? My attitude to November changes ten times during the day )',
                commentsData:[
                    {
                        id: 1,
                        name: 'Lucas',
                        comment: 'Hi',
                        src: 'https://celebsupdate.com/wp-content/uploads/2020/02/Chris-Hemsworth-Hollywood-Actor.jpg'
                    }
                ],
                liked: false,
                likesCount: 167,
            },
        ],
        newPostText: '',
        newCommentText: '',
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
    
};

const profileReducer = (state = initialState, action) => {
    let copyState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case  ADD_POST:
            let newPosts = {
                id: 6,
                src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312564812_658788478950885_8062167258836811753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=wF-3heRTHxwAX_r5DxV&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBsgRBEnL2RnMY10iFYRk6LfIBO7u3o6w_6buzYQAq41Q&oe=63BE712E',
                text: state.newPostText,
                commentsData: [
                    {
                        id: 4,
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
                id: 1,
                name: 'Mia',
                comment: state.newCommentText,
                src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/116487761_1709970135832188_2623279487738365785_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSnYTPPWyNcAX_30MCJ&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfC_c5AECGXNXSLvvMUvq29dMZwwIGBnVpGsNOrpS54iAw&oe=63F3B518'
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

export default profileReducer;