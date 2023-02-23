import React from "react";
import MyInfoContainer from "./MyInfo/MyInfoContainer"; 
import { PostContainer } from "./Post/PostsContainer";
import classes from'./Profile.module.css';
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import UserPhoto from '../../images/usersImg.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { NavLink } from "react-router-dom";


function Profile(props){
    
    console.log(props, "1254");
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

    // const href = window.location.href; // http://localhost:3000/profile/friends 37
    // let url = href.slice(30);
    // console.log(url);
                return (
                    <div className={classes.profile}>
                        <ProfileAvatar/>
                        <div className={classes.userHeader}>
                            <div className={classes.userPhoto}>
                                <img src={props.profile.photos.small? props.profile.photos.small: UserPhoto} alt='img'/>
                            </div>
                            <div className={classes.userName}>
                                <p>{props.profile.fullName}</p>
                                <span className={classes.status}>{props.profile.status}</span>
                                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                            </div>
                        </div>
                        {props.userId === 'friends'? <div className={classes.friendsListForm}>
                            <div className={classes.friendsInfo}>
                                    <div className={classes.friendsSearch}>
                                        <h3 className={classes.h3}>Friends</h3>
                                        <div className={classes.searchDiv}>
                                            <span>
                                                <i className={classes.searchImg}></i>
                                                <input type='search' placeholder='Search'></input>
                                            </span>
                                        </div>  
                                    </div>
                                    {props.friendsData.map(friends => ( <div className={classes.friendsItemForm} key={friends.key}>
                                        <div className={classes.friendsItem}>
                                            <div className={classes.friendsItemInfoForm}>
                                            <div className={classes.friendsItemInfo}>
                                                <div className={classes.userFriendImg}>
                                                <NavLink to={'/profile/'+ friends.id} >
                                                <img src={friends.url} alt="img"/>
                                                </NavLink>
                                                </div>
                                                <div className={classes.userFriendName}>
                                                    <p>{friends.name}</p>
                                                    <span>about you</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div>
                                                <div className={classes.delete}>...</div>
                                            </div>
                                        </div>
                                    </div>
                                    ) )}
                                </div>
                            </div>
                        :<div className={classes.profileContent}>
                            <MyInfoContainer/>
                            <ProfileInfoContainer/>
                            <PostContainer/>
                        </div> }
                    </div>
                );
}

export default Profile;