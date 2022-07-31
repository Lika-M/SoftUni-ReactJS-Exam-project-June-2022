import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect} from 'react';

import useLocaleStorage from './hooks/useLocalStorage.js';
import { AuthContext } from './contexts/AuthContext.js';
// import * as authService from './services/authService.js;'

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Catalog/Catalog.js'
import Create from './components/Catalog/Create/Create.js'
import Details from './components/Catalog/Details/Details.js';
import Edit from './components/Catalog/Edit/Edit.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import About from './components/About/About.js';
import './App.css';

const initialUserState = {
  email: '',
  _id: '',
  accessToken: ''
}

function App() {

  // const [user, setUser] = useState(initialUserState);

  // with custom hook to implement persistance in case of refresh
  const [user, setUser] = useLocaleStorage('user',
    initialUserState);


  function userLogin(userData) {
    setUser(userData);
  }

  function userLogout() {
    setUser(initialUserState);
  }


  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout }}>
    <div id="container">
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog/:type' element={<Catalog />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:plantId' element={<Edit />} />
        <Route path='/details/:plantId' element={<Details />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </AuthContext.Provider>
  )
}

export default App;
