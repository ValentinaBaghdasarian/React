import classes from './Results.module.css';

function Results(){
    return (
        <div className={classes.results}>
            <div className={classes.countOfLike}>
                <spna>count Like</spna>
            </div>
            <div className={classes.countOfComment}>
                <spna>count Comment</spna>
            </div>
        </div>
    );
}

export default Results;