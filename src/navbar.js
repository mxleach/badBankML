import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './app.css';

function Navbar() { 
  return( 
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">BadBank</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink className="nav-link" to="/create-account">Create Account</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/deposit">Deposit</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/withdraw">Withdraw</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/all-data">AllData</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  
  );
}


export default Navbar;