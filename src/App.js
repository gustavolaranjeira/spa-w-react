import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound';
import Photo from './Components/Photo/Photo';
import User from './Components/User/User';
import UserProfile from './Components/User/UserProfile';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/spa-w-react/" element={<Home />} />
              <Route path="/spa-w-react/login/*" element={<Login />} />
              <ProtectedRoute path="/spa-w-react/conta/*" element={<User />} />
              <Route path="/spa-w-react/foto/:id" element={<Photo />} />
              <Route
                path="/spa-w-react/perfil/:user"
                element={<UserProfile />}
              />
              <Route path="/spa-w-react/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
