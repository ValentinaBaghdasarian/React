import classes from './PublishedPost.module.css';
import Response from './Response/Response';
import Results from './Results/Results';

function PublishedPost(props){
    return (
        <div className={classes.publishedPost}>
            <div className={classes.text}>
                <sapn>
                    {props.text}
                </sapn>
            </div>
            <img src={props.src}/>
            <Results/>
            <hr/>
            <Response/>
            <hr/>
        </div>
    );
}

export default PublishedPost;