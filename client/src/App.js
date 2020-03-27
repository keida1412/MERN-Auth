import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App(props) {

  const active = props.active;
  
  let lg = "", sp = "";
  if(active === "login") {
    lg = "active";
  }
  if(active === "signup") {
    sp = "active";
  }

  const st = {
    textDecoration: "none"
  }

  return (
    <div className="nav_bar">
      <Link to='/' style={st}>
        <span>KeidaKira</span>
      </Link>
      <Link to='/login' style={st}>
        <li className={lg}>Login</li>
      </Link>
      <Link to='/signup' style={st}>
        <li className={sp}>Signup</li>
      </Link>
    </div>
  );

}

export default App;
