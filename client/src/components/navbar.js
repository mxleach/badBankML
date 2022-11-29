import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../styles/app.css";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Bad Bank
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink className="nav-link" to="/createaccount">
                Create Account
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/deposit">
                Deposit
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/withdraw">
                Withdraw
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/recordlist">
                Record List
              </NavLink>
              </li>
              <li className="navbar-item">
              <NavLink className="nav-link" to="/news">
                Finance News
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
