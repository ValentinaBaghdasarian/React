import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/NAV/Nav';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import DialogContainer from './components/Dialogs/Dialog/DialogContainer';



function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div className='app-wrapper-content'>      
            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer/>}/>
              <Route path='/profile/' element={<Profile/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
              <Route path='/dialogs/' element={<DialogContainer/>}/>
            </Routes>     
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
