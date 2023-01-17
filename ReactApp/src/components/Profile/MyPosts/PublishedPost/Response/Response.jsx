import classes from './Response.module.css';


function Response(){
    return (
        <div className={classes.response}>
                <div className={classes.like}>
                    <span>Like</span>
                </div>
                <div className={classes.comment}>
                    <span>Comment</span>
                </div>
                <div className={classes.share}>
                    <span>Share</span>
                </div>
        </div>
    );
}

export default Response;