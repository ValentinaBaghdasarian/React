import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/NAV/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';




function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div className='app-wrapper-content'>      
            <Routes>
              <Route path="/dialogs/*" element={<Dialogs store={props.store} state={props.state} dispatch={props.dispatch}/>}/>
              <Route path="/profile/" element={<Profile  state={props.state} dispatch={props.dispatch}/>}/>
            </Routes>     
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
