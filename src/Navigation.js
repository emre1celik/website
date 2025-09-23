import { faDownload, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navigation() {
  return (
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
            <span className="nav-label">Home</span>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1ednW_xQsh0xlBhg-5KpH1GcJ6JrEoCv5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: "6px" }} />
            <span className="nav-label">Download</span>
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/NFwQxTJY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: "16px" }} />
            <span className="nav-label">Community</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
