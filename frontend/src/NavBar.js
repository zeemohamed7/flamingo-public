import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './images/flammy.png';
import '.'
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { isAuth, loginHandler, logoutHandler } = props;

  return (
    <nav className="header navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <Link to="/flamingo" className="navbar-brand">
  <img className="logo" src={logo} alt="Logo" />
</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/flamingo" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            {isAuth && (
              <>
                <li className="nav-item">
                  <Link to="/compliment" className="nav-link">
                    Compliment Jar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/music" className="nav-link">
                    Melodic Memories
                  </Link>
                </li>
              </>
            )}
            {!isAuth ? (
              <>
                <li className="nav-item">
                  <Link to="/signin" onClick={loginHandler} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/logout" onClick={logoutHandler} className="nav-link">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;