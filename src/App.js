import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/login/Login';
import './style/App.css';
import Api from './services/Api';
import { UserStorage } from './UserContext';
import User from './components/user/User';
import ProtectedRoute from './components/helper/ProtectedRoute';
import Photo from './components/photo/Photo';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login/*' element={<Login />}></Route>
            <ProtectedRoute
              exact
              path='/conta/*'
              element={<User />}
            ></ProtectedRoute>
            <Route exact path='/foto/:id' element={<Photo />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
