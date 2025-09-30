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
                <span>Stats</span>
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
