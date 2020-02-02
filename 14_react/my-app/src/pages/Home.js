import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home= () => {
  return (
    <div className="Home-body">
      <Link to="/main" className="Home-link">
        WELCOME
      </Link>
    </div>
  )
};

export default Home;