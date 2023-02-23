import React from "react";
import classes from './Posts.module.css';
import UserAvatar from '../UserAvatar/UserAvatar';
import likeImg from '../../../images/like-button-icon.svg';
import loveImg from '../../../images/love.svg';
import likesImg from '../../../images/like.png';
import disLikesImg from '../../../images/circle.png';
import commImg from '../../../images/comment.png';
import comImg from '../../../images/message.png';
import sendImg from '../../../images/send.png';

function Post(props){
    // function onAddComment(){
    //     if(props.profile.newCommentText !== ''){
    //         props.addComment();
    //     }
    // }
    let postsData = [  
        {
        id: 1,
        src: 'https://s3-img.pixpa.com/com/500/50172/1609789578-730041-mg-6579.jpg',
        text: 'my sunshine',
        commentsData: [
            {
                id: 1,
                name: 'Anna Lucy',
                comment: "You are beautiful))",
                src: 'https://s3-img.pixpa.com/com/500/50172/1620766827-675978-mg-8890.jpg',
                liked: true,
            },
            {
                id: 2,
                name: 'Mia Le Da',
                comment: "Pretty girl",
                src: 'https://s3-img.pixpa.com/com/800/50172/1558057355-392466-mg-2766.jpg',
                liked: false,
            },
            {
                id: 3,
                name: 'Lucas',
                comment: 'Hi',
                src: 'https://celebsupdate.com/wp-content/uploads/2020/02/Chris-Hemsworth-Hollywood-Actor.jpg',
                liked: false,
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
                src: 'https://s3-img.pixpa.com/com/500/50172/1620766827-675978-mg-8890.jpg',
                liked: false,
            },
            {
                id: 2,
                name: 'Mia Le Da',
                comment: "Pretty girl",
                src: 'https://s3-img.pixpa.com/com/800/50172/1558057355-392466-mg-2766.jpg',
                liked: false,
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
                src: 'https://celebsupdate.com/wp-content/uploads/2020/02/Chris-Hemsworth-Hollywood-Actor.jpg',
                liked: false,
            }
        ],
        liked: false,
        likesCount: 167,
    },];

    if(props.postsData.length === 0){
        props.setPosts(postsData);
    }
    let refInput = React.createRef();

    function onCommentChange(e){
        let newText = e.target.value;
        props.updateNewCommentText(newText);
        e.preventDefault();
    }

    return(
        <div>
            {props.postsData.map(post => <div key={post.id} className={classes.myPosts}>
                {/* User.jsx                  մաքուր գործ չկա*/}  
                <div className={classes.user}>
                    <UserAvatar src='https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613'/>
                    <div className={classes.userName}>
                        <span>Sofia Stuart</span>
                    </div>
                    <div className={classes.postDate}>
                        <span>19 september</span>
                    </div>
                </div>


                {/* PublishedPost.jsx */}
                <div className={classes.formForPost}>
                    <div className={classes.publishedPost}>
                        <div className={classes.text}>
                            <sapn>
                                {post.text}
                            </sapn>
                        </div>
                        <img src={post.src} alt='img'/>

                        {/*  Results.jsx*/}
                        <div className={classes.results}>
                            <div className={classes.countOfLike}>
                                <div className={classes.divImg}><img src={likeImg} alt='img'/></div>
                                <div className={classes.divImg}><img src={loveImg} alt='img'/></div>
                                <div className={classes.divLike}> {post.likesCount}</div>
                            </div>
                            <div className={classes.countOfComment}>
                                <div className={classes.divCom}><img src={commImg} alt='img'/></div>
                                <spna>{post.commentsData.length}</spna>
                            </div>
                        </div>
                        <hr/>
                        
                        {/* Response.jsx     մաքուր գործ չկա*/}      
                        <div className={classes.response}>
                            
                                {(post.liked) ? 
                                    <div className={classes.like}>
                                        <div className={classes.likeResponseDiv}>
                                            <img alt='img' src={likesImg} className={classes.responseImg}/>
                                        </div>
                                        <input className={classes.input} type='submit' value='Like' onClick={() => {props.like(post.id)}}/>
                                    </div>:
                                    <div className={classes.disLike}>
                                        <div className={classes.disLikeResponseDiv}>
                                            <img alt='img' src={disLikesImg} className={classes.responseImg}/>
                                        </div>
                                        <input className={classes.input} type='submit' value='Like' onClick={() => {props.disLike(post.id)}}/>
                                    </div>           
                                }

                            
                            <div className={classes.responseComm}>
                                <div className={classes.commentResponseDiv}>
                                    <img src={comImg} alt='img' className={classes.responseImg}/>
                                </div>
                                <input className={classes.input} type='submit' value='Comment' onClick={() => {refInput.current.focus()}}/>
                            </div>
                            <div className={classes.send}>
                                <div className={classes.sendResponseDiv}>
                                    <img src={sendImg} alt='img' className={classes.responseImg}/>
                                </div>
                                <input className={classes.input} type='submit' value='Send'/>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>

                {/* comments.jsx */}
                {post.commentsData.map(comm => <div>
                    {/* { props.CommentElements } */}
                    
                        <div className={classes.comments}>
                            <div className={classes.item}>       
                                <UserAvatar src={comm.src}/>
                                <div className={classes.name_com}>
                                    <div className={classes.commUserName}>
                                        <span>{comm.name}</span>
                                    </div>
                                    <div className={classes.comment}>  
                                        {comm.comment} 
                                    </div>
                                </div>
                                <div className={classes.comLikes}> 
                                    {comm.liked? <span className={classes.comLove} onClick={() =>{props.comLike(comm.id)}}>Love</span> : <span className={classes.comLike} onClick={() =>{props.comDisLike(comm.id)}}>Like</span>}
                                    <span>Reply</span>
                                </div>
                                <div className={classes.delete}>...</div>
                            </div> 
                        </div>
                </div>)}

            
                <div className={classes.addCom}>
                    <UserAvatar src='https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/67525924_1377030872459451_2133847328698662912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vDzBRzsWiGwAX9MC28a&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBVZP37KUZrWOGr5yic_O9tMTKVNzi9tECAvpc438CVGA&oe=63E25613'/>
                    <div className={classes.addComItem}>
                        <input className={classes.commText} ref={refInput} placeholder='Write a comment...' onChange={onCommentChange} value={props.profile.newCommentText}/>
                        <div>
                            <input className={classes.sendCommText} type='submit' value='Send' onClick={() => {if(props.profile.newCommentText !== ''){ props.addComment(post.id)}}}/>
                        </div>
                    </div> 
                </div> 
            </div>)}
        </div>
    );
}

export default Post;