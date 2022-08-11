import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext.js';
import { DataProvider } from './contexts/DataContext.js';
import { UserPrivateRoute } from './components/common/UserPrivateRoute.js';
import { OwnerPrivateRoute } from './components/common/OwnerPrivateRoute.js';

import ErrorBoundary from './components/common/ErrorBoundary.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Catalog/Catalog.js'
import Create from './components/Create/Create.js'
import Details from './components/Details/Details.js';
import Edit from './components/Edit/Edit.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import About from './components/About/About.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import MyPlants from './components/MyPlants/MyPlants.js';
import './App.css';


export default function App() {

  return (
    <ErrorBoundary>
      <AuthProvider >
        <div id="container">
          <Header />
          <main>
            <DataProvider >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog/:type' element={<Catalog />} />
                <Route path='/catalog' element={<Dashboard />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />

                <Route element={<UserPrivateRoute />}>
                  <Route path='/logout' element={<Logout />} />

                  <Route path='/create' element={<Create />} />

                  <Route path='/edit/:plantId' element={
                    <OwnerPrivateRoute>
                      <Edit />
                    </OwnerPrivateRoute>} />
                    
                  <Route path='/my-plants' element={<MyPlants />} />
                </Route>

                <Route path='/details/:plantId' element={<Details />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </DataProvider>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  )
}


