// import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducers/profile-reducer';
// import StoreContext from '../../../redux/StoreContext';
import ProfileInfo from './ProfileInfo';
import {connect} from 'react-redux';


// function ProfileInfoContainer(){
//     return(
//         <StoreContext>{
//             (store) => {
//                 let onAddPost = () => {
//                         store.dispatch(addPostActionCreator());
//                 };
            
//                 let onPostChange = (text) =>{
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 };
            
//                 return <ProfileInfo updateNewPostText={onPostChange} addPost={onAddPost} profile={store.getState().profile}/> 
//             }
//         }</StoreContext>
//     );
// }


function mapStateToProps(state) {
    return {profile: state.profile};
}

function mapDispatchToProps(dispatch) {
    return {
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text));},
        addPost: ()=>{dispatch(addPostActionCreator());}
    };
}

const ProfileInfoContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;