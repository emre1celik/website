import { useEffect, useState } from "react";
import { useRef } from "react";
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
import {
  faUser,
  faCog,
  faChartBar,
  faTrophy,
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
import { useTranslation } from "../../context/TranslationContext";
import ControlPanelProfile from "./profile/ControlPanelProfile";
import ControlPanelSettings from "./settings/ControlPanelSettings";
import ControlPanelStats from "./stats/ControlPanelStats";
import ControlPanelAchievements from "./achievements/ControlPanelAchievements";

function ControlPanel({ user }) {
  const { translate } = useTranslation();
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

  async function changeMount(e, character) {
    const newModel = parseInt(e.target.value);
    const token = localStorage.getItem("apiToken");

    try {
      const response = await fetch(
        "https://api.myramu.online/api/change-giant-model",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            character_name: character.name,
            giant_model: newModel,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setCharacterActionMessage({
          type: "success",
          text: "✅ " + data.message,
        });
        await fetchCharacters(); // refresh after change
      } else {
        setCharacterActionMessage({
          type: "error",
          text: "❌ " + (data.error || "Failed to update mount"),
        });
      }
    } catch (err) {
      setCharacterActionMessage({
        type: "error",
        text: "❌ Server error: " + err.message,
      });
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
        //console.error("Failed to load characters:", data.error);
        setCharacters([]);
        return [];
      }
    } catch (err) {
      //console.error("Server error:", err);
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
          //console.error("Failed to load profile:", data.error);
          setProfile(null);
        }
      } catch (err) {
        //console.error("Server error:", err);
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

  useEffect(() => {
    if (characterActionMessage && tabContentRef.current) {
      tabContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [characterActionMessage]);

  function renderTabContent() {
    switch (activeTab) {
      case "profile":
        return (
          <ControlPanelProfile
            profile={profile}
            translate={translate}
            loading={loading}
          />
        );
      case "settings":
        return (
          <ControlPanelSettings
            password={password}
            confirmPassword={confirmPassword}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            changingPassword={changingPassword}
            passwordMessage={passwordMessage}
            onChangePasswordSubmit={onChangePasswordSubmit}
            translate={translate}
          />
        );
      case "stats":
        return (
          <ControlPanelStats
            characters={characters}
            charsLoading={charsLoading}
            characterActionMessage={characterActionMessage}
            actionLoading={actionLoading}
            handleCharacterAction={handleCharacterAction}
            changeMount={changeMount}
            translate={translate}
            getClassInfo={getClassInfo}
            classNamesMap={classNamesMap}
          />
        );
      case "achievements":
        return <ControlPanelAchievements />;
      default:
        return null;
    }
  }

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
            <h2>{translate("controlPanel.hello").replace("{user}", user)}</h2>

            <ControlPanelTabs>
              <ControlPanelTabButton
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
              >
                <FontAwesomeIcon icon={faUser} />
                <span>{translate("controlPanel.tabs.profile")}</span>
              </ControlPanelTabButton>

              <ControlPanelTabButton
                active={activeTab === "settings"}
                onClick={() => setActiveTab("settings")}
              >
                <FontAwesomeIcon icon={faCog} />
                <span>{translate("controlPanel.tabs.settings")}</span>
              </ControlPanelTabButton>

              <ControlPanelTabButton
                active={activeTab === "stats"}
                onClick={() => setActiveTab("stats")}
              >
                <FontAwesomeIcon icon={faChartBar} />
                <span>{translate("controlPanel.tabs.stats")}</span>
              </ControlPanelTabButton>
            </ControlPanelTabs>

            <ControlPanelTabButton
              active={activeTab === "achievements"}
              onClick={() => setActiveTab("achievements")}
            >
              <FontAwesomeIcon icon={faTrophy} />
              <span>Rewards & Achievements</span>
            </ControlPanelTabButton>

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
