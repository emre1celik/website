import React, { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";

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
          style={{ maxWidth: "800px", padding: "2rem 3rem" }}
        >
          <h2>Hello, {user}!</h2>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            <button
              onClick={() => setActiveTab("profile")}
              style={{
                background: activeTab === "profile" ? "#4caf50" : "#333",
                color: "white",
                flex: 1,
                padding: "0.75rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              style={{
                background: activeTab === "settings" ? "#4caf50" : "#333",
                color: "white",
                flex: 1,
                padding: "0.75rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              style={{
                background: activeTab === "stats" ? "#4caf50" : "#333",
                color: "white",
                flex: 1,
                padding: "0.75rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Stats
            </button>
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>
      </header>
    </div>
  );
}

export default ControlPanel;
