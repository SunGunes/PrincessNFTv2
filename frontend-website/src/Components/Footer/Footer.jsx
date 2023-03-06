import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Footer.css";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="Footer-container-Top">
          <div className="Footer-container-Logo">
            <img src={logo} alt="" />
          </div>
          <div className="Footer-container-MyAccount">
            <h4 className="Footer-container-h4">My Account</h4>
            <ul>
              <li>
                <Link to={"/"}>Profile</Link>
              </li>
              <li>
                <Link to={"/"}>Watchlist</Link>
              </li>
              <li>
                <Link to={"/"}>Favorites</Link>
              </li>
              <li>
                <Link to={"/"}>Minting</Link>
              </li>
            </ul>
          </div>
          <div className="Footer-container-Marketplaces">
            <h4 className="Footer-container-h4">Marketplaces</h4>
            <ul>
              <li>
                <Link to={"/"}>Ongoing</Link>
              </li>
              <li>
                <Link to={"/"}>Upcoming</Link>
              </li>
              <li>
                <Link to={"/"}>Minting</Link>
              </li>
            </ul>
          </div>
          <div className="Footer-container-Projects">
            <h4 className="Footer-container-h4">Project</h4>
            <ul>
              <li>
                <Link to={"/"}>Create WL</Link>
              </li>
              <li>
                <Link to={"/"}>List Project</Link>
              </li>
            </ul>
          </div>
          <div className="Footer-container-Contact Us">Contact Us</div>
        </div>
        <div className="Footer-container-Bottom">
          <div className="Footer-container-Socials">
            <ul>
              <li>
                <BsTwitter color="pink" size={30}></BsTwitter>
              </li>
              <li>
                <AiFillInstagram color="pink" size={30}></AiFillInstagram>
              </li>
              <li>
                <BsDiscord color="pink" size={30}></BsDiscord>
              </li>
            </ul>
          </div>
          <div className="Footer-container-Subscribe-to-Email">
            <input type="email" placeholder="Subscribe to Email" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
