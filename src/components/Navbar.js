import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
  const handleLogOut = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/login');
      props.setLogin(false);
      localStorage.setItem("isLoggedIn", false);
    } else {
      props.setPopup(!props.popup);
    }
  }
  
  const navigate = useNavigate();
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
          <div>
            <div className='logobg'></div>
            <img id="top-logo" src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/bias-logo.png?raw=true' alt=''/>
            <Link className="navbar-brand" to={props.login?"/home":"/login"}>Student Portal</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcollapse" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarcollapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home" hidden={!props.login}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <button className="button" onClick={handleLogOut}>
                  Log {props.login ? 'Out' : 'In'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
