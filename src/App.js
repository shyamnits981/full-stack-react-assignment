import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import SignIn from './components/screens/SignIn';
import Signup from './components/screens/Signup';
import Addlist from './components/screens/Addlist';
import Productlist from './components/screens/List';
import Logout from './components/screens/Logout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Signup/> } />
<Route path="/signin" element={ <SignIn/> } />
<Route path="/list" element={ <Productlist/> } />
<Route path="/addlist" element={<Addlist/>} />
<Route path='/logout' element={<Logout/>} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;


