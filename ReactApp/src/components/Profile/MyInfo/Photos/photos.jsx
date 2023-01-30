import { NavLink } from 'react-router-dom';
import DivForPhoto from '../DivForPhoto/divForPhoto';
import classes from './photos.module.css';


function Photos(props){
    let path = '/profile/photos';
    let photosElement = props.myInfo.photosData.map(p => <DivForPhoto src={p.url} name={p.name}/> );

    return (
        <div className={classes.myPhoto}>
            <div className={classes.titles}>
                <div className={classes.title}>
                    <NavLink to={path}><h3>Photos</h3></NavLink>
                </div>
                <div className={classes.allPhotos}>
                <span>See all photos</span>
                </div>
            </div>
            <div className={classes.photos}>   
                { photosElement }
            </div>
        </div>
    );
}

export default Photos;