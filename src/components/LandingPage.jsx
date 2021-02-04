import React from "react";
import Employee from "../assets/user.png";
import Manager from "../assets/manager.png";
import Admin from "../assets/king.png";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="navbar-container">
          <nav>
            <div><img className="logoimg" src={logo} alt=""/> </div>
            <div className="navlist-container">
             
              <Link to="/employeelogin">
              <div><img src={Employee} alt=""/></div> <div>Employee </div>
              </Link>
              <Link to="/managerlogin">
              <div><img src={Manager} alt=""/></div> <div>Manager</div> 
              </Link>
              <Link to="/adminlogin">
              <div><img src={Admin} alt=""/></div>
              <div>Admin </div>
              </Link>
            </div>
          </nav>
        </div>
       
        <div className="headliner-container">
          <img className="banner" src={banner} alt=""/>
        </div>
        <div className="crm_content">
          <div>
            <h1>
            Connect with your <br/>customers <br/> wherever they are
            </h1>
            </div>
          <div>
            <ul>
              <li>Reach customers across every channel: telephone, email, live chat, and social media</li>
              <li>Get real-time notifications when customers interact with your business</li>
              <li>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</li>
            </ul>
          </div>
        </div>
        <footer>
          Copyrights @ zoho crm 2021
        </footer>
       
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
