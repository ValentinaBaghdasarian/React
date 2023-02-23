import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuth} from '../../redux/reducers/auth-reducer';
import { compose } from 'redux';


class HeaderComponent extends React.Component{
    
    componentDidMount(){
        this.props.getAuth();
        // authAPI.getAuth().then( response => {
        //     if(response.data.resultCode === 0){
        //         let  { id, email, login} = response.data.data;
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // });
    }

    render(){
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) =>{
    return { 
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default compose(connect(mapStateToProps, {getAuth}))(HeaderComponent)

// const HeaderContainer = connect(mapStateToProps, {getAuth})(HeaderComponent);

// export default HeaderContainer;









// import React from 'react';
// import { connect } from 'react-redux';
// import Header from './Header';
// import {setAuthUserData} from '../../redux/reducers/auth-reducer';
// import {authAPI} from '../../api/api';

// class HeaderComponent extends React.Component{
    
//     componentDidMount(){
//         authAPI.getAuth().then( data => {
//             if(data.resultCode === 0){
//                 let  {email, id, login} = data.data;
//                 this.props.setAuthUserData(id, email, login);
//             }
//         });
//     }

//     render(){
//         return <Header {...this.props}/>
//     }
// }


// const mapStateToProps = (state) =>{
//     return { 
//         isAuth: state.auth.isAuth,
//         login: state.auth.login
//     };
// };

// const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderComponent);

// export default HeaderContainer;