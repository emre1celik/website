import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";

function ControlPanel({ user }) {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <div>Your profile information will appear here.</div>;
      case "settings":
        return <div>Settings and preferences can be changed here.</div>;
      case "stats":
        return <div>Game stats and account info will appear here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navigation user={user} />

      <header className="hero">
        <div
          className="register-box"
          style={{ maxWidth: "80%", padding: "2rem 3rem" }}
        >
          <h2>Hello, {user}!</h2>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0",
              marginBottom: "1.5rem",
              borderBottom: "2px solid #555",
            }}
          >
            {["profile", "settings", "stats"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: "0.75rem",
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    activeTab === tab
                      ? "4px solid #4caf50"
                      : "4px solid transparent",
                  color: activeTab === tab ? "#fff" : "#bbb",
                  fontWeight: activeTab === tab ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    activeTab === tab ? "#fff" : "#bbb")
                }
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>
      </header>
      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ControlPanel;
