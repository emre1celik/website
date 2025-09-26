import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faFile } from "@fortawesome/free-solid-svg-icons";

function Downloads({ user }) {
  const mirrors = [
    {
      name: "Google Drive",
      url: "https://drive.google.com/file/d/1ednW_xQsh0xlBhg-5KpH1GcJ6JrEoCv5/view?usp=sharing",
      icon: faCloud,
    },
    {
      name: "MEGA.nz",
      url: "https://mega.nz/file/NL9EGaDR#PfheSNZ2GEyTp9Zwj_yW7yeKqF67tVPk85tnRQYQTTs",
      icon: faCloud,
    },
    {
      name: "MediaFire",
      url: "https://www.mediafire.com/file/umahy656t784skz/MyraMU.rar/file",
      icon: faFile,
    },
  ];

  return (
    <div className="App">
      <Navigation user={user} />
      <header className="hero">
        <div
          className="register-box"
          style={{ maxWidth: "600px", padding: "2rem 3rem" }}
        >
          <h2>Download Mirrors</h2>
          <p
            style={{
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              color: "#ccc",
            }}
          >
            Choose a mirror to download the client. All links point to the same
            latest version.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {mirrors.map((mirror, idx) => (
              <li key={idx} style={{ margin: "1rem 0" }}>
                <a
                  href={mirror.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="mirror-button"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.75rem",
                      padding: "0.75rem 3rem",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#4caf50",
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "0.3s, transform 0.2s",
                    }}
                  >
                    <FontAwesomeIcon icon={mirror.icon} />
                    {mirror.name}
                  </button>
                </a>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "0.85rem", color: "#ccc", marginTop: "1rem" }}>
            ⚠️ Note: You may need to exclude <strong>main.exe</strong> from your
            firewall or turn it off temporarily for the client to connect.
          </p>
        </div>
      </header>
      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Downloads;
