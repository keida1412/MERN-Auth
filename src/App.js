import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  const st = {
    textDecoration: "none"
  }

  return (
    <div className="nav_bar">
      <Link to='/' style={st}>
        <span>KeidaKira</span>
      </Link>
      <Link to='/login' style={st}>
        <li>Login</li>
      </Link>
      <Link to='/signup' style={st}>
        <li>Signup</li>
      </Link>
    </div>
  );
}

export default App;
