import React from "react";
import "./App.css"; // reuse existing styles
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
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
        <h1>404 - Page Not Found</h1>
        <p>Oops! We can’t find the page you’re looking for.</p>
      </header>

      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default NotFound;
