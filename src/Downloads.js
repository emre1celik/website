import React from "react";
import "./App.css";
import Navigation from "./Navigation";

function Downloads() {
  const mirrors = [
    {
      name: "Google Drive",
      url: "https://drive.google.com/file/d/1ednW_xQsh0xlBhg-5KpH1GcJ6JrEoCv5/view?usp=sharing",
    },
    { name: "Mirror 2", url: "#" },
    { name: "Mirror 3", url: "#" },
  ];

  return (
    <div className="App">
      <Navigation />

      <header className="hero">
        <div
          className="register-box"
          style={{ maxWidth: "500px", padding: "2rem 2rem" }}
        >
          <h2>Download Client</h2>
          <p style={{ marginBottom: "1rem" }}>
            Choose a mirror to download the MyraMU client:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {mirrors.map((mirror, index) => (
              <li key={index}>
                <a
                  href={mirror.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    background: "#4caf50",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontWeight: "bold",
                    transition: "0.3s",
                  }}
                >
                  {mirror.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Downloads;
