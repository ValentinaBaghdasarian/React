import React from 'react';
import {follow, unfollow, getUsers} from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class UsersComponent extends React.Component{
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersCount);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.usersCount);
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.usersCount).then(data => {
        //     this.props.setUsers(data.items);
        // })
    }

    render() {
        return <Users {...this.props}
                      onPageChanged={this.onPageChanged} />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(follow(userId)),
//         unfollow: (userId) => dispatch(unfollow(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
//         setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount))
//     };
// };

// let AuthRedirectComponent = withAuthRedirect(UsersComponent);

// const UsersContainer = connect(mapStateToProps, {follow, unfollow, getUsers})(AuthRedirectComponent);

// export default UsersContainer;

export default compose(connect(mapStateToProps, {follow, unfollow, getUsers}), withAuthRedirect)(UsersComponent)