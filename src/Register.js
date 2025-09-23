import React from "react";
import "./App.css"; // reuse existing styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faUserPlus,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <Link
            to="/"
            className="hero-button-link"
            style={{ textDecoration: "none", color: "white" }}
          >
            MyraMU
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "16px" }} />
              Home
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                icon={faDownload}
                style={{ marginRight: "6px" }}
              />
              Download
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/NFwQxTJY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: "16px" }} />
              Community
            </a>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <div className="register-box">
          <h2>Create an Account</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </header>

      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Register;
