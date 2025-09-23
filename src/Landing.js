import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Landing() {
  return (
    <div className="App">
      <Navigation />

      <header className="hero">
        <h1>Welcome to MyraMU!</h1>
        <p>Experience the ultimate MU online adventure.</p>
        <div className="hero-buttons">
          <button>
            <FontAwesomeIcon
              icon={faDownload}
              className="responsive-icon-margin"
            />
            <Link
              to="https://drive.google.com/file/d/1ednW_xQsh0xlBhg-5KpH1GcJ6JrEoCv5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Download <span className="nav-label">Client</span>
            </Link>
          </button>
          <Link to="/register" className="hero-button-link">
            <button>
              <FontAwesomeIcon
                icon={faUserPlus}
                className="responsive-icon-margin"
              />
              Register <span className="nav-label">Account</span>
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
