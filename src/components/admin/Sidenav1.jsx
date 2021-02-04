import React from "react";
import { NavLink, Link } from "react-router-dom";

const delToken = () => {
  localStorage.removeItem("token"); 
  localStorage.removeItem("email");
};
const Sidenav = () => {
  return (
    <React.Fragment>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/admindashboard/servicerequest"
              className="nav-items"
              activeClassName={`nav-items active`}
            >
              <i class="fa fa-ticket" aria-hidden="true"></i> Service Request
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admindashboard/lead"
              className="nav-items"
              activeClassName={`nav-items active`}
            >
              <i class="fa fa-line-chart" aria-hidden="true"></i> Leads
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admindashboard/contact"
              className="nav-items"
              activeClassName={`nav-items active`}
            >
              <i class="fa fa-address-book" aria-hidden="true"></i> Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admindashboard/allusers"
              className="nav-items"
              activeClassName={`nav-items active`}
            >
              <i class="fa fa-users" aria-hidden="true"></i>  All Users
            </NavLink>
          </li>
          <li>
            <Link onClick={() => delToken()} to="/" className="nav-items">
              <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidenav;
