import { useEffect, useState } from "react";
import {
  ControlPanelWrapper,
  ControlPanelContent,
  ControlPanelBox,
  ControlPanelTabs,
  ControlPanelTabButton,
  ControlPanelTabContent,
  GreenButton,
} from "./ControlPanelStyles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faChartBar,
  faCartShopping,
  faLocationCrosshairs,
  faUpLong,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

function ControlPanel({ user }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [charsLoading, setCharsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setCharsLoading(true);
      const token = localStorage.getItem("apiToken");

      try {
        const response = await fetch(
          "https://api.myramu.online/api/characters",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setCharacters(data.characters);
        } else {
          console.error("Failed to load characters:", data.error);
          setCharacters([]);
        }
      } catch (err) {
        console.error("Server error:", err);
        setCharacters([]);
      } finally {
        setCharsLoading(false);
      }
    };

    fetchCharacters();
  }, [user]);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const token = localStorage.getItem("apiToken");
      try {
        const response = await fetch("https://api.myramu.online/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (response.ok) {
          setProfile(data);
        } else {
          console.error("Failed to load profile:", data.error);
          setProfile(null);
        }
      } catch (err) {
        console.error("Server error:", err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        if (loading) return <p>Loading...</p>;
        if (!profile) return <p>Could not load profile.</p>;
        return (
          <div>
            <h3>Account Information</h3>

            <div style={{ marginBottom: "1rem" }}>
              <label>Email</label>
              <br />
              <input
                type="text"
                value={profile.email}
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
                value={profile.accountName}
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
              <label>WCoin</label>
              <br />
              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "0.3rem" }}
              >
                <input
                  type="text"
                  value={profile.wcoin.toLocaleString()}
                  disabled
                  style={{
                    flex: 2,
                    padding: "0.5rem",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid #555",
                    borderRadius: "5px",
                    color: "#ccc",
                  }}
                />
                <GreenButton style={{ flex: 1 }}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ marginRight: "5px" }}
                  />
                  Buy
                </GreenButton>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Goblin Points</label>
              <br />
              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "0.3rem" }}
              >
                <input
                  type="number"
                  value={profile.goblin_points.toLocaleString()}
                  disabled
                  style={{
                    flex: 2,
                    padding: "0.5rem",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid #555",
                    borderRadius: "5px",
                    color: "#ccc",
                  }}
                />
                <GreenButton style={{ flex: 1 }}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ marginRight: "5px" }}
                  />
                  Buy
                </GreenButton>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label>Last Login</label>
              <br />
              <input
                type="text"
                value={profile.last_login}
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
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  style={{ marginRight: "5px" }}
                />
                Update Password
              </button>
            </form>
          </div>
        );

      case "stats":
        if (charsLoading) return <p>Loading characters...</p>;
        if (!characters.length) return <p>No characters found.</p>;

        return (
          <div>
            <h3>Character Statistics</h3>
            {characters.map((char, idx) => (
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
                  <strong>Race:</strong> {char.race}
                </p>

                {/* Action buttons */}
                <div
                  style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}
                >
                  <GreenButton>
                    <FontAwesomeIcon
                      icon={faLocationCrosshairs}
                      style={{ marginRight: "5px" }}
                    />
                    Unstuck
                  </GreenButton>
                  <GreenButton>
                    <FontAwesomeIcon
                      icon={faUpLong}
                      style={{ marginRight: "5px" }}
                    />
                    Evolve
                  </GreenButton>
                  <GreenButton>
                    <FontAwesomeIcon
                      icon={faArrowsRotate}
                      style={{ marginRight: "5px" }}
                    />
                    Grand Reset
                  </GreenButton>
                </div>
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
                <span>Characters</span>
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
