import React from "react";
import styles from './Users.module.css';
import UserAvatar from '../Profile/UserAvatar/UserAvatar';
import axios from 'axios';
import userPhoto from '../../images/user1.jpg';



// const url = 'https://jsonplaceholder.typicode.com/users';



class Users extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.usersCount} `).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.usersCount} `).then(response => {
            this.props.setUsers(response.data.items);

        })
    }



    render() {
        
        let countPages = Math.ceil(this.props.totalUsersCount / this.props.usersCount);
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
                        return <span className={ this.props.currentPage === page? styles.selectedPage : styles.pageNumber} onClick={(e) =>{this.onPageChanged(page)}}>{page}</span>
                    })}
                </div>
                <div className={styles.usersAreaForm}>
                    {this.props.users.map(user => <div key={user.id}  className={styles.userArea}> 
                        <UserAvatar src={user.photos.small? user.photos.small: userPhoto}/>
                        <span className={styles.userInfo}>
                            <div className={styles.userName}>{user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()}</div>
                            <div className={styles.userStatus}>{user.status}</div>
                        </span>
                        <span className={styles.userLocation}>
                            <div>{user.uniqueUrlName}</div>
                        </span>
                        <div>
                        {user.followed ? 
                            <input className={styles.followedBtn} onClick={()=>{this.props.follow(user.id)}} type='submit' value='follow'/> : 
                            <input className={styles.followedBtn} onClick={()=>{this.props.unfollow(user.id)}} type='submit' value='unfollow'/>}
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
}

export default Users;
