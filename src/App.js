import React from "react";
import "./App.css";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faUserPlus,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">MyraMU</div>
        <ul className="nav-links">
          <li>
            <a href="#home">
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "16px" }} />
              Home
            </a>
          </li>
          <li>
            <a href="#download">
              <FontAwesomeIcon
                icon={faDownload}
                style={{ marginRight: "6px" }}
              />
              Download
            </a>
          </li>
          <li>
            <a href="#community">
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
          <button>
            <FontAwesomeIcon
              icon={faUserPlus}
              style={{ marginRight: "16px" }}
            />
            Register Account
          </button>
        </div>
      </header>

      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
