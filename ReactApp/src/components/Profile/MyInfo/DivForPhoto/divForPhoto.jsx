import classes from './divForPhoto.module.css';

function DivForPhoto(props){
    return (
        <div className={classes.kubik}>
            <img src={props.src} alt='img'/>
            <span>{props.name}</span>
        </div>
    );
}

export default DivForPhoto;