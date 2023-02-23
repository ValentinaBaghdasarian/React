import { NavLink } from 'react-router-dom';
import DivForPhoto from '../DivForPhoto/divForPhoto';
import classes from './photos.module.css';


function Photos(props){

    let photosData = [
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
    ]
    if(props.photosData.length === 0){
        props.setPhotos(photosData);
    }
    let path = '/profile/photos';
    let photosElement = props.photosData.map(p => <DivForPhoto src={p.url} name={p.name}/> );

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