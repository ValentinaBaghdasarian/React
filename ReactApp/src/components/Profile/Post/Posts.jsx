import React from "react";
import classes from './Posts.module.css';
import UserAvatar from '../UserAvatar/UserAvatar';



function Post(props){
    // function onAddComment(){
    //     if(props.profile.newCommentText !== ''){
    //         props.addComment();
    //     }
    // }
    let refInput = React.createRef();

    function onCommentChange(e){
        let newText = e.target.value;
        props.updateNewCommentText(newText);
        e.preventDefault();
    }

    return(
        <div>
            {props.profile.postsData.map(post => <div key={post.id} className={classes.myPosts}>
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
                        <img src={post.src}/>

                        {/*  Results.jsx*/}
                        <div className={classes.results}>
                            <div className={classes.countOfLike}>
                                <spna>👍💛 {post.likesCount}</spna>
                            </div>
                            <div className={classes.countOfComment}>
                                <spna>{post.commentsData.length < 2 ? `${post.commentsData.length} comment`: `${post.commentsData.length} comments`} </spna>
                            </div>
                        </div>
                        <hr/>
                        
                        {/* Response.jsx     մաքուր գործ չկա*/}      
                        <div className={classes.response}>
                            
                                {(post.liked) ? 
                                    <div className={classes.like}>
                                        <input type='submit' value='Like' onClick={() => {props.like(post.id)}}/> 
                                    </div>:
                                    <div className={classes.disLike}>
                                        <input type='submit' value='Like' onClick={() => {props.disLike(post.id)}}/>
                                    </div>           
                                }

                            
                            <div className={classes.responseComm}>
                                
                                <input type='submit' value='Comment' onClick={() => {refInput.current.focus()}}/>
                            </div>
                            <div className={classes.share}>
                            <input type='submit' value='Share'/>
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