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
    <ControlPanelWrapper>
      <Navigation user={user} />

      <ControlPanelContent>
        <ControlPanelBox>
          <h2>Hello, {user}!</h2>

          <ControlPanelTabs>
            {["profile", "settings", "stats"].map((tab) => (
              <ControlPanelTabButton
                key={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </ControlPanelTabButton>
            ))}
          </ControlPanelTabs>

          <ControlPanelTabContent>{renderTabContent()}</ControlPanelTabContent>
        </ControlPanelBox>
      </ControlPanelContent>

      <Footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </Footer>
    </ControlPanelWrapper>
  );
}

export default ControlPanel;
