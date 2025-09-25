import {
  faDownload,
  faHome,
  faRightToBracket,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navigation({ user }) {
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
          <Link
            to="/downloads"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: "6px" }} />
            <span className="nav-label">Download</span>
          </Link>
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

        {/* Conditional login/register or greeting */}
        {!user ? (
          <>
            <li className="login-link">
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  style={{ marginRight: "16px" }}
                />
                <span className="nav-label">Login</span>
              </Link>
            </li>
          </>
        ) : (
          <span className="nav-label">
            <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FontAwesomeIcon icon={faUser} style={{ color: "#4caf50" }} />
              <span style={{ fontWeight: "bold", color: "#fff" }}>{user}</span>
            </li>
          </span>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
