import React from 'react';
import Nav from './components/NAV/Nav';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import DialogContainer from './components/Dialogs/Dialog/DialogContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav/>
        <div className='app-wrapper-content'>      
            <Routes>
              <Route path='/dialogs*' element={<DialogsContainer/>}/>
              <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
              <Route path='/dialogs/' element={<DialogContainer/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>     
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
