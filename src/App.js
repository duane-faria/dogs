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
import UserProfile from './components/user/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/login/*' element={<Login />}></Route>
              <ProtectedRoute
                exact
                path='/conta/*'
                element={<User />}
              ></ProtectedRoute>
              <Route exact path='/foto/:id' element={<Photo />}></Route>
              <Route
                exact
                path='/perfil/:user'
                element={<UserProfile />}
              ></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
