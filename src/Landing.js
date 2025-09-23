import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faUserPlus,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Landing() {
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
        <h1>Welcome to MyraMU!</h1>
        <p>Experience the ultimate MU online adventure.</p>
        <div className="hero-buttons">
          <button>
            <FontAwesomeIcon
              icon={faDownload}
              style={{ marginRight: "16px" }}
            />
            Download Client
          </button>
          <Link to="/register" className="hero-button-link">
            <button>
              <FontAwesomeIcon
                icon={faUserPlus}
                style={{ marginRight: "16px" }}
              />
              Register Account
            </button>
          </Link>
        </div>
      </header>

      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
