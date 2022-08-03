import { Route, Routes } from 'react-router-dom';

import { useState, useEffect } from 'react';

import useLocaleStorage from './hooks/useLocalStorage.js';
import { AuthContext } from './contexts/AuthContext.js';
import { DataContext } from './contexts/DataContext.js';
// import * as authService from './services/authService.js;'
import * as dataService from './services/dataService.js'

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
import Dashboard from './components/Dashboard/Dashboard.js';


function App() {

  const [user, setUser] = useLocaleStorage('userData', {});
  const [plants, setPlants] = useState({ items: [], currentType: '' });

  useEffect(() => {
    dataService.getAll()
      .then(result => {
        setPlants({ items: result, currentType: 'All' });
      })
  }, [])

  function userLogin(userData) {
    setUser(userData);
  }

  function userLogout() {
    setUser({});
  }

  function addPlant(newItem) {
    setPlants(state => {
       return {
        ...state,
        items:[...state.items, newItem]
       }
    })
  }

  function updatePlants(item, plantId) {
    setPlants(state => {
      const plant = state.items.find(x => x._id === plantId);
      const updatedItems = state.items.filter(x => x !== plant);
      updatedItems.push(item); 
      return {
        items: updatedItems,
        
      }
    })
  }

  function removePlant(plantId) {
    setPlants(state => {
      const item = state.items.find(x => x._id === plantId)
       return {
       ...state,
       items: state.items.filter(x => x !== item)
       }
    })
  }

 
  console.log(plants);

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout }}>
      <div id="container">
        <Header />
        <main>
          <DataContext.Provider value={{ plants, addPlant, updatePlants,removePlant }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/catalog/:type' element={<Catalog />} />
              <Route path='/catalog' element={<Dashboard plants={plants} />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/create' element={<Create />} />
              <Route path='/edit/:plantId' element={<Edit />} />
              <Route path='/details/:plantId' element={<Details />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </DataContext.Provider>

        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App;
