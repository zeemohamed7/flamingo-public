import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComplimentPage from './Features/Compliment';
import MusicPage from './Features/MusicSection';
import SignIn from './User/SignIn';
import SignUp from './User/Signup';
import Navbar from './NavBar';
import Main from './Home/Main';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import './src/css/App.css';
import './src/css/Compliment.css';
import './src/css/MusicSection.css';
import './src/css/Sign.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token != null) {
      let decodedUser = jwt_decode(token);

      if (decodedUser) {
        setIsAuth(true);
        setUser(decodedUser);
      } else {
        localStorage.removeItem('token');
        setIsAuth(false);
      }
    }
    setLoaded(true);
  }, []);

  const registerHandler = (user) => {
    axios
      .post('/auth/signup', user)
      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          console.log('Sign up successful');
          // Redirect to the sign-in page after successful registration
          window.location.href = '/signin';
        }
      })
      .catch((err) => {
        console.log(err.message);
        console.log('error in app.js');
      });
  };

  const loginHandler = (cred) => {
    axios
      .post('/signin', cred)
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        console.log('You are logged in!');

        if (res.status === 200) {
          // Redirect to the home page after successful login
          window.location.href = '/';
        }

        let token = res.data.token;
        if (token != null) {
          localStorage.setItem('token', token);
          let decodedUser = jwt_decode(token);
          setIsAuth(true);
          setUser(decodedUser);
          console.log(decodedUser);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log('error in login page app.js');
      });
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setIsAuth(false);
    setUser({});
    window.location.href = '/'; // Redirect to the home page
  };

  if (!loaded) {
    return <div>Loading...</div>; // Show a loading message or spinner while authentication status is being determined
  }

  return (
    <Router>
      <div className="app">
        <Navbar isAuth={isAuth} logoutHandler={logoutHandler} />
        <Routes>
        <Route path="/flamingo" element={<Main />} />
                  <Route
            path="/compliment"
            element={isAuth ? <ComplimentPage user={user} /> : <SignIn login={loginHandler} />}
          />
          <Route
            path="/music"
            element={isAuth ? <MusicPage user={user} /> : <SignIn login={loginHandler} />}
          />
          <Route path="/signup" element={<SignUp register={registerHandler} />} />
          <Route path="/signin" element={<SignIn login={loginHandler} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;