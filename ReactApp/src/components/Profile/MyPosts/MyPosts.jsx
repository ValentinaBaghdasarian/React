import React from 'react';
import classes from './MyPosts.module.css';
import Comment from './Comments/Comment';
import NewPosts from './NewPosts/NewPosts';

function Comments(props){
    return (
        <div>
            <Comment comment={props.comment} name={props.name} src={props.src}/>
        </div>
    );
}


function MyPosts(props){
    let PostElements = props.profile.postsData.map(p => <NewPosts CommentElements={p.commentsData? p.commentsData.map(c => <Comments name={c.name} comment={c.comment} src={c.src}/>): ''} id={p.id} src={p.src} text={p.text}/>)


    return (
        <div className={classes.myPosts}>
            {PostElements}
        </div> 
    );
}

export default MyPosts;