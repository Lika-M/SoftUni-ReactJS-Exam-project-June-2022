import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Catalog/Catalog.js'
import Create from './components/Create/Create.js'
import Details from './components/Details/Details.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import About from './components/About/About.js';
import * as authService from './services/authService.js'

function App() {

  const [userInfo, setUserInfo] = useState({email: '', isAuthenticated: false});
  
  useEffect(() => {
    const user = authService.getUserData();
    setUserInfo({
      user,
      isAuthenticated: Boolean(user)
    })
  }, []);

  function onLogin(email) {
    setUserInfo({
      user: email,
      isAuthenticated: true
    })
  }

  function onLogout () {
    setUserInfo( {
      user: '',
      // isAuthenticated: false
    })
  }

  return (
    <div className='App'>
      <Header {...userInfo} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login onLogin={onLogin} />} />
        <Route path='/logout' element={<Logout onLogout={onLogout} />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details' element={<Details />} />
        <Route path='/about' element={<About />} />

      </Routes>
      <main>

      </main>
      <Footer />
    </div>
  )
}

export default App;
