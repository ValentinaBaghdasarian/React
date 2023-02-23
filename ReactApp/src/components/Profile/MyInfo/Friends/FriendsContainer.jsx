import { connect } from 'react-redux';
import Friends from './friends';
import React from 'react';
import { setFriends } from '../../../../redux/reducers/profile-reducer';
// import axios from 'axios';

class FriendsComponent extends React.Component {
    componentDidMount(){ 
    }

    render(){
        return (<Friends {...this.props} />)
    }
}

let mapStateToProps = (state) => (
    { 
      friendsData: state.profile.friendsData,
      photosData: state.profile.photosData,
      followingInProgress: state.usersPage.followingInProgress
    });

// let mapDispatchToProps = (dispatch) => {
//   return {
//     setFriends: (friendsData) => dispatch(setFriends(friendsData))
// }
// }


const FriendsContainer = connect(mapStateToProps, {setFriends})(FriendsComponent);

export default FriendsContainer;