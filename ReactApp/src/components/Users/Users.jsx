import React from "react";
import styles from './Users.module.css';
import UserAvatar from '../Profile/UserAvatar/UserAvatar';
import userPhoto from '../../images/user1.jpg';
import { Navigate, NavLink } from "react-router-dom";
import {followAPI} from '../../api/api';


// const url = 'https://jsonplaceholder.typicode.com/users';



function Users (props) {

let countPages = Math.ceil(props.totalUsersCount / props.usersCount);
let pages = [];
for(let i = 1; i <= countPages; i++) {
    pages.push(i);
};
    return (
        <div className={styles.usersArea}>
            <p className={styles.text}>People</p>
            <div className={styles.selectedPage}>
                {
                pages.map(page => { 
                    return <span className={ props.currentPage === page? styles.selectedPage : styles.pageNumber} onClick={(e) =>{props.onPageChanged(page)}}>{page}</span>
                })}
            </div>
            <div className={styles.usersAreaForm}>
                {props.users.map(user => <div key={user.id}  className={styles.userArea}> 
                    <NavLink to={'/profile/' + user.id}>
                        <UserAvatar src={user.photos.small? user.photos.small: userPhoto}/>
                    </NavLink>
                    <span className={styles.userInfo}>
                        <div className={styles.userName}>{user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()}</div>
                        <div className={styles.userStatus}>{user.status}</div>
                    </span>
                    <span className={styles.userLocation}>
                        <div>{user.uniqueUrlName}</div>
                    </span>
                    <div>
                    {user.followed ? 
                        <input className={styles.followedBtn} onClick={()=>{
                            props.unfollow(user.id)         
                            // followAPI.getUnfollow(user.id).then(response => {
                            //         if(response.data.resultCode === 0){
                            //             props.unfollow(user.id)
                            //         }
                            //     })
                            }} type='submit' value='unfollow'/>: 
                        <input className={styles.followedBtn} onClick={()=>{
                            props.follow(user.id)
                            // followAPI.getFollow(user.id).then(response => {
                            //         if(response.data.resultCode === 0){
                            //             props.follow(user.id)
                            //         }
                            //     })
                            }} type='submit' value='follow'/> 
                    }
                    </div>
                </div>
            )}
                <div className={styles.seeMoreBtnForm}>
                    <input  className={styles.seeMoreBtn} type='submit' value="See more"/>
                </div>
            </div>     
        </div>
    )              
}

export default Users;
