import DivForPhoto from '../DivForPhoto/divForPhoto';
import classes from './friends.module.css';
import { NavLink } from 'react-router-dom';

function Friends(props){
    
    let friendsData = [ {id: 1, 
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
                },];
    if(props.friendsData.length === 0){
        props.setFriends(friendsData);
    }

    // let friendElement = props.friendsData.map(f => <DivForPhoto src={f.url} name={f.name}/> );


    return (
        <div className={classes.myFriends}>
            <div className={classes.titles}>
                <div className={classes.title}>
                    <NavLink to='/profile/friends'><h3>Friends</h3></NavLink>
                    <div className={classes.inscription}>
                        countFriends friends
                    </div>
                </div>
                <div className={classes.allFriends}>
                <span>See all friends</span>
                </div>
            </div>
            <div className={classes.photos}>
               {/* {friendElement} */}
                {props.friendsData.map(friends => (<div className={classes.kubik}>
                    <NavLink to={'/profile/' + friends.id}>
                        <img src={friends.url} alt='img'/>
                    </NavLink>
                    <span>{friends.name}</span>
                </div>))}

            </div>
        </div>
    );
}

export default Friends;