import React from "react";
import classes from './Users.module.css';
import UserAvatar from '../Profile/UserAvatar/UserAvatar';
import axios from 'axios';
import userPhoto from '../../images/user1.jpg';


function Users(props){
    
const url = 'https://jsonplaceholder.typicode.com/users';

    if(props.users.length === 0){
        // props.setUsers( [
        //     {id: 1, 
        //      photoURL: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/275915666_502553941241007_1443927400686038854_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=C3zRGqrpJawAX_OSI9Y&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBUDi13s388-OCKT6y_YP69uwY4YFP283LWY3YIrkpaEQ&oe=63CFF60F',
        //      followed: false, 
        //      fullName: 'Eleanor Roosevelt', 
        //      status: "The future belongs to those who believe in the beauty of their dreams.", 
        //      location: {city: 'Minsk', 
        //                 country: ''
        //                }
        //     },
        //     {id: 2, 
        //      photoURL: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/122461210_1790887307740470_6019480983883389433_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ly5TufxXw2wAX8mGqsj&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfCANmH7IHXAJ35rjimFjBrdPTdWFRD6ZD88hBETu7xmPg&oe=63F1FA86',    
        //      followed: true, 
        //      fullName: 'Robert Louis Stevenson', 
        //      status: "Don't judge each day by the harvest you reap but by the seeds that you plant.", 
        //      location: {city: 'Minsk', 
        //                 country: ''
        //                }
        //     },
        //     {id: 3, 
        //      photoURL: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/123834012_204220791074325_472372299578480749_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=n73ktpCIfh0AX_AdSAY&_nc_ht=scontent.fevn5-1.fna&oh=00_AfAxfQoPQf8C-SMzWCRzmIsRIpRuCaSe12y64hY_La2ozA&oe=63F1F1BB',    
        //      followed: false, 
        //      fullName: 'Margaret Mead', 
        //      status: 'Always remember that you are absolutely unique. Just like everyone else', 
        //      location: {city: 'Minsk', 
        //                 country: ''
        //                }
        //     },
        //     {id: 4, 
        //         photoURL: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.6435-9/109733020_1699292216899980_1731816047125235522_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xNp_qx02S40AX-2Vace&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDbVfobhu6gFj8nSYg-nAMOoY60iMSrnFyASIKYmNBxaw&oe=63F22DA5',    
        //         followed: false, 
        //         fullName: 'Camelia Anghel', 
        //         status: 'Always remember that you are absolutely unique. Just like everyone else', 
        //         location: {city: 'Minsk', 
        //                    country: ''
        //                   }
        //     },
        // ]);
        axios.get(url).then(response => {
            console.log(response.data);
            props.setUsers(response.data);
        });
    }


    return(
        <div className={classes.usersArea}>
            <p className={classes.text}>People</p>
            <div className={classes.usersAreaForm}>
                {props.users.map(user => <div key={user.id}  className={classes.userArea}> 
                        <UserAvatar src={userPhoto}/>
                        <span className={classes.userInfo}>
                            <div className={classes.userName}>{user.name}</div>
                            <div className={classes.userStatus}>{user.username}</div>
                        </span>
                        <span className={classes.userLocation}>
                            <div>{user.address.city}</div>
                        </span>
                        <div>
                        {user.followed ? 
                            <input className={classes.followedBtn} onClick={()=>{props.follow(user.id)}} type='submit' value='follow'/> : 
                            <input className={classes.followedBtn} onClick={()=>{props.unfollow(user.id)}} type='submit' value='unfollow'/>}
                        </div>
                    </div>
                )}
                    <div className={classes.seeMoreBtnForm}>
                        <input  className={classes.seeMoreBtn} type='submit' value="See more"/>
                     </div>
                </div>
                
        </div>
    );
}

export default Users;