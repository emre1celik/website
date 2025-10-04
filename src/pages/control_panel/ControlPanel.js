import { useEffect, useState } from "react";
import { useRef } from "react";
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
import DwIcon from "../../assets/images/classes/dw.png";
import DkIcon from "../../assets/images/classes/dk.png";
import ElfIcon from "../../assets/images/classes/elf.png";
import MgIcon from "../../assets/images/classes/mg.png";
import DlIcon from "../../assets/images/classes/dl.png";
import SumIcon from "../../assets/images/classes/sum.png";
import RfIcon from "../../assets/images/classes/rf.png";
import GlIcon from "../../assets/images/classes/gl.png";
import RwIcon from "../../assets/images/classes/rw.png";
import SlIcon from "../../assets/images/classes/sl.png";
import GcIcon from "../../assets/images/classes/gc.png";
import LwIcon from "../../assets/images/classes/lw.png";
import MaIcon from "../../assets/images/classes/ma.png";
import IkIcon from "../../assets/images/classes/ik.png";
import DefaultIcon from "../../assets/images/classes/default.png";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function ControlPanel({ user }) {
  const [characterActionMessage, setCharacterActionMessage] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [charsLoading, setCharsLoading] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [changingPassword, setChangingPassword] = useState(false);
  const tabContentRef = useRef(null);

  const classNamesMap = {
    dw: "Dark Wizard",
    dk: "Dark Knight",
    elf: "Elf",
    mg: "Magic Gladiator",
    dl: "Dark Lord",
    sum: "Summoner",
    rf: "Rage Fighter",
    gl: "Grow Lancer",
    rw: "Rune Wizard",
    sl: "Slayer",
    gc: "Gun Grusher",
    lw: "Light Wizard",
    ma: "Mage: Lemuria",
    ik: "Illusion Knight",
  };
  const [actionLoading, setActionLoading] = useState({});
  async function handleCharacterAction(characterName, actionType) {
    const token = localStorage.getItem("apiToken");
    const key = `${characterName}_${actionType}`;

    setActionLoading((prev) => ({ ...prev, [key]: true }));
    setCharacterActionMessage(null); // clear previous message

    try {
      const response = await fetch(
        `https://api.myramu.online/api/${actionType}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ character_name: characterName }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setCharacterActionMessage({
          type: "success",
          text: "✅ " + data.message,
        });
        await fetchCharacters(); // refresh list
      } else {
        setCharacterActionMessage({
          type: "error",
          text: "❌ " + (data.error || "Action failed"),
        });
      }
    } catch (err) {
      setCharacterActionMessage({
        type: "error",
        text: "❌ Server error: " + err.message,
      });
    } finally {
      setActionLoading((prev) => ({ ...prev, [key]: false }));
    }
  }

  const classIconMap = {
    dw: { ids: [0, 1, 3, 7, 15], icon: DwIcon },
    dk: { ids: [16, 17, 19, 23, 31], icon: DkIcon },
    elf: { ids: [32, 33, 35, 39, 47], icon: ElfIcon },
    mg: { ids: [48, 49, 51, 55, 63], icon: MgIcon },
    dl: { ids: [64, 65, 67, 71, 79], icon: DlIcon },
    sum: { ids: [80, 81, 83, 87, 95], icon: SumIcon },
    rf: { ids: [96, 97, 99, 103, 111], icon: RfIcon },
    gl: { ids: [112, 113, 115, 119, 127], icon: GlIcon },
    rw: { ids: [128, 129, 131, 135, 143], icon: RwIcon },
    sl: { ids: [144, 145, 147, 151, 159], icon: SlIcon },
    gc: { ids: [160, 161, 163, 167, 175], icon: GcIcon },
    lw: { ids: [176, 177, 179, 183, 191], icon: LwIcon },
    ma: { ids: [192, 193, 195, 199, 207], icon: MaIcon },
    ik: { ids: [208, 209, 211, 215, 223], icon: IkIcon },
  };

  function getClassInfo(raceId) {
    for (const key in classIconMap) {
      if (classIconMap[key].ids.includes(raceId)) {
        return { icon: classIconMap[key].icon, key };
      }
    }
    return { icon: DefaultIcon, key: "unknown" };
  }
  // Inside your ControlPanel component:

  // 1️⃣ Define fetchCharacters as a reusable function
  const fetchCharacters = async () => {
    setCharsLoading(true);
    const token = localStorage.getItem("apiToken");

    try {
      const response = await fetch("https://api.myramu.online/api/characters", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setCharacters(data.characters);
        return data.characters; // return updated characters
      } else {
        console.error("Failed to load characters:", data.error);
        setCharacters([]);
        return [];
      }
    } catch (err) {
      console.error("Server error:", err);
      setCharacters([]);
      return [];
    } finally {
      setCharsLoading(false);
    }
  };

  // 2️⃣ useEffect calls fetchCharacters on mount/user change
  useEffect(() => {
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

  async function onChangePasswordSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMessage({ type: "error", text: "❌ Passwords do not match!" });
      return;
    }

    setChangingPassword(true);
    setPasswordMessage(null); // clear old messages

    const token = localStorage.getItem("apiToken");
    try {
      const response = await fetch(
        "https://api.myramu.online/api/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            new_password: password,
            new_password_confirmation: confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setPasswordMessage({ type: "success", text: "✅ " + data.message });
        setPassword("");
        setConfirmPassword("");
      } else {
        setPasswordMessage({
          type: "error",
          text:
            "❌ " +
            (data.error ||
              data.errors?.new_password?.[0] ||
              "Failed to update password"),
        });
      }
    } catch (err) {
      setPasswordMessage({
        type: "error",
        text: "❌ Server error: " + err.message,
      });
    } finally {
      setChangingPassword(false);
    }
  }

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
            <form onSubmit={(e) => onChangePasswordSubmit(e)}>
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
                disabled={changingPassword}
                style={{
                  padding: "0.7rem 1.5rem",
                  backgroundColor: changingPassword ? "#666" : "#4caf50",
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: changingPassword ? "not-allowed" : "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  style={{ marginRight: "5px" }}
                />
                {changingPassword ? "Updating..." : "Update Password"}
              </button>

              {passwordMessage && (
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "0.7rem",
                    borderRadius: "5px",
                    backgroundColor:
                      passwordMessage.type === "success"
                        ? "rgba(76, 175, 80, 0.2)"
                        : "rgba(244, 67, 54, 0.2)",
                    color:
                      passwordMessage.type === "success"
                        ? "#4caf50"
                        : "#f44336",
                    border: `1px solid ${
                      passwordMessage.type === "success" ? "#4caf50" : "#f44336"
                    }`,
                  }}
                >
                  {passwordMessage.text}
                </div>
              )}
            </form>
          </div>
        );

      case "stats":
        if (charsLoading) return <p>Loading characters...</p>;
        if (!characters.length) return <p>No characters found.</p>;

        return (
          <div>
            <h3>Character Statistics</h3>
            {characterActionMessage && (
              <div
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  padding: "0.7rem",
                  borderRadius: "5px",
                  marginTop: "15px",
                  backgroundColor:
                    characterActionMessage.type === "success"
                      ? "rgba(76, 175, 80, 0.2)"
                      : "rgba(244, 67, 54, 0.2)",
                  color:
                    characterActionMessage.type === "success"
                      ? "#4caf50"
                      : "#f44336",
                  border: `1px solid ${
                    characterActionMessage.type === "success"
                      ? "#4caf50"
                      : "#f44336"
                  }`,
                }}
              >
                {characterActionMessage.text}
              </div>
            )}
            {characters.map((char, idx) => {
              const classInfo = getClassInfo(char.race);
              return (
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
                    <strong>Race:</strong>{" "}
                    <img
                      src={classInfo.icon}
                      alt={classInfo.key}
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "6px",
                        verticalAlign: "middle",
                      }}
                    />
                    {classNamesMap[classInfo.key] || "Unknown"}
                  </p>

                  {/* Action buttons */}
                  <div
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    {["unstuck", "evolve", "grand-reset"].map((action) => {
                      const key = `${char.name}_${action}`;
                      const iconMap = {
                        unstuck: faLocationCrosshairs,
                        evolve: faUpLong,
                        "grand-reset": faArrowsRotate,
                      };
                      const labelMap = {
                        unstuck: "Unstuck",
                        evolve: "Evolve",
                        "grand-reset": "Grand Reset",
                      };

                      return (
                        <div
                          key={action}
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <GreenButton
                            disabled={actionLoading[key]}
                            onClick={() =>
                              handleCharacterAction(char.name, action)
                            }
                          >
                            <FontAwesomeIcon
                              icon={
                                actionLoading[key] ? faSpinner : iconMap[action]
                              }
                              spin={actionLoading[key]} // spin only when loading
                              style={{ marginRight: "5px" }}
                            />
                            {actionLoading[key]
                              ? "Processing..."
                              : labelMap[action]}
                          </GreenButton>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };
  useEffect(() => {
    if (characterActionMessage && tabContentRef.current) {
      tabContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [characterActionMessage]);

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

            <ControlPanelTabContent ref={tabContentRef}>
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
