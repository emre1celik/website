import { useState } from "react";
import {
  ControlPanelWrapper,
  ControlPanelContent,
  ControlPanelBox,
  ControlPanelTabs,
  ControlPanelTabButton,
  ControlPanelTabContent,
} from "./ControlPanelStyles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faChartBar } from "@fortawesome/free-solid-svg-icons";

const mockUser = {
  email: "test@test.com",
  accountName: "test",
  joinDate: "2025-01-15",
  lastLogin: "2025-09-28 14:32",
  emailConfirmed: true,
  characters: [
    {
      name: "Test",
      level: 401,
      reset: 3,
      stats: { str: 1200, agi: 800, vit: 700, ene: 600, cmd: 0 },
    },
    {
      name: "Test1",
      level: 350,
      reset: 1,
      stats: { str: 200, agi: 1500, vit: 500, ene: 800, cmd: 0 },
    },
  ],
};

function ControlPanel({ user }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <h3>Account Information</h3>

            <div style={{ marginBottom: "1rem" }}>
              <label>Email</label>
              <br />
              <input
                type="text"
                value={mockUser.email}
                disabled
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  borderRadius: "5px",
                  color: "#ccc",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Account Name</label>
              <br />
              <input
                type="text"
                value={mockUser.accountName}
                disabled
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  borderRadius: "5px",
                  color: "#ccc",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Join Date</label>
              <br />
              <input
                type="text"
                value={mockUser.joinDate}
                disabled
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  borderRadius: "5px",
                  color: "#ccc",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Last Login</label>
              <br />
              <input
                type="text"
                value={mockUser.lastLogin}
                disabled
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  borderRadius: "5px",
                  color: "#ccc",
                }}
              />
            </div>
          </div>
        );

      case "settings":
        return (
          <div>
            <h3>Change Password</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (password !== confirmPassword) {
                  alert("Passwords do not match!");
                  return;
                }
                alert("Password changed successfully!");
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="password">New Password</label>
                <br />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.3rem",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid #555",
                    borderRadius: "5px",
                    color: "#ccc",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <br />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.3rem",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid #555",
                    borderRadius: "5px",
                    color: "#ccc",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "0.7rem 1.5rem",
                  backgroundColor: "#4caf50",
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Update Password
              </button>
            </form>
          </div>
        );

      case "stats":
        return (
          <div>
            <h3>Character Statistics</h3>
            {mockUser.characters.map((char, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "1.5rem",
                  padding: "1rem",
                  border: "1px solid #555",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <p>
                  <strong>Name:</strong> {char.name}
                </p>
                <p>
                  <strong>Level:</strong> {char.level}
                </p>
                <p>
                  <strong>Resets:</strong> {char.reset}
                </p>
                <p>
                  <strong>Characters:</strong>
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  <li>Strength: {char.stats.str}</li>
                  <li>Agility: {char.stats.agi}</li>
                  <li>Vitality: {char.stats.vit}</li>
                  <li>Energy: {char.stats.ene}</li>
                  <li>Command: {char.stats.cmd}</li>
                </ul>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Myra MuOnline - Control Panel | Season 19 Episode 2-3</title>
        <meta
          name="description"
          content="Manage your Myra MuOnline account in the Control Panel. Check your stats, update settings, and enjoy the Season 19 Episode 2-3 private server experience."
        />
        <meta
          name="keywords"
          content="mu online control panel, myra mu account management, mu private server stats, myra season 19 control panel"
        />
      </Helmet>

      <ControlPanelWrapper>
        <Navigation user={user} />

        <ControlPanelContent>
          <ControlPanelBox>
            <h2>Hello, {user}!</h2>

            <ControlPanelTabs>
              <ControlPanelTabButton
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
              </ControlPanelTabButton>

              <ControlPanelTabButton
                active={activeTab === "settings"}
                onClick={() => setActiveTab("settings")}
              >
                <FontAwesomeIcon icon={faCog} />
                <span>Settings</span>
              </ControlPanelTabButton>

              <ControlPanelTabButton
                active={activeTab === "stats"}
                onClick={() => setActiveTab("stats")}
              >
                <FontAwesomeIcon icon={faChartBar} />
                <span>Statistics</span>
              </ControlPanelTabButton>
            </ControlPanelTabs>

            <ControlPanelTabContent>
              {renderTabContent()}
            </ControlPanelTabContent>
          </ControlPanelBox>
        </ControlPanelContent>

        <Footer>
          <p>© 2025 MyraMU. All rights reserved.</p>
        </Footer>
      </ControlPanelWrapper>
    </>
  );
}

export default ControlPanel;
