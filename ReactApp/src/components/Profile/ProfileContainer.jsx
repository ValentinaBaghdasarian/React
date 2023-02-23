import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setFriends, getProfile, getStatus, updateStatus } from '../../redux/reducers/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <>
                <Component {...props} router={{ location, navigate, params}} />
            </>
        );
    }

    return ComponentWithRouterProp;
}


class ProfileComponent extends React.Component{
    componentDidMount(){
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = this.props.profile.userId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);        
        // profileAPI.getProfile(userId).then(response => { 
        //     this.props.setUserProfile(response.data);
        // })


        // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => { 
        // this.props.setUserProfile(response.data);
        // })
    }
    render(){
        // if(!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <Profile {...this.props} userId={this.props.router.params.userId} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => (
    {
        friendsData: state.profile.friendsData,
        profile: state.profile.profile,
        status: state.profile.status
    }
);

export default compose(connect(mapStateToProps, {setFriends, getProfile, getStatus, updateStatus}), withRouter,withAuthRedirect)(ProfileComponent)




//for Navigate
// let AuthRedirectComponent = withAuthRedirect(ProfileComponent);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// const ProfileContainer = connect(mapStateToProps, {setFriends, getProfile})(WithUrlDataContainerComponent);

// export default ProfileContainer;
