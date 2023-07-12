import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
function Home() {
  return (
    <div className='home'>
    <div className="navbar">
        <Link to="/">
        <button className="nav-button">Home</button>
        </Link>
        <Link to="/Login">
        <button className="nav-button">Login</button>
        </Link>
        <Link to="/Signup">
        <button className="nav-button">Signup</button>
        </Link>
    </div>
    </div>
  );
}

export default Home;