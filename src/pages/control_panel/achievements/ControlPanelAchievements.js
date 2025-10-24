import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faLock, faGift } from "@fortawesome/free-solid-svg-icons";
import {
  AchievementList,
  AchievementItem,
  AchievementInfo,
  AchievementReward,
  GreenButton,
} from "../ControlPanelStyles";
import EventIcon from "../../../assets/images/classes/event.png";
import ResetIcon from "../../../assets/images/classes/reset.png";

export default function ControlPanelAchievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      setLoading(true);
      const token = localStorage.getItem("apiToken");
      try {
        const response = await fetch(
          "https://api.myramu.online/api/achievements",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setAchievements(data.achievements || []);
        } else {
          console.error("Failed to load achievements:", data.error);
          setAchievements([]);
        }
      } catch (err) {
        console.error("Server error:", err);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) return <p>Loading achievements...</p>;
  if (!achievements?.length) return <p>No achievements found.</p>;

  const getIcon = (type) => {
    switch (type) {
      case "resets":
        return ResetIcon;
      default:
        return EventIcon;
    }
  };

  return (
    <div>
      <h3>Rewards & Achievements</h3>
      <AchievementList>
        {achievements.map((ach) => (
          <AchievementItem
            key={ach.key}
            claimed={ach.claimed}
            unlocked={ach.unlocked}
          >
            <AchievementInfo claimed={ach.claimed} unlocked={ach.unlocked}>
              <img src={getIcon(ach.key)} alt={ach.label} />
              <div>
                <h4>{ach.label}</h4>
                <p>
                  Progress: {ach.progress} / {ach.required}
                </p>
              </div>
            </AchievementInfo>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <AchievementReward>
                <FontAwesomeIcon icon={faGift} /> +
                {ach.reward_ruud.toLocaleString()} Ruud
              </AchievementReward>

              {ach.unlocked && !ach.claimed ? (
                <GreenButton
                  onClick={() => console.log("Collect reward for:", ach.key)}
                >
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ marginRight: "5px" }}
                  />
                  Collect
                </GreenButton>
              ) : ach.claimed ? (
                <span style={{ color: "#4caf50", fontWeight: "bold" }}>
                  Claimed
                </span>
              ) : (
                <span style={{ color: "#888" }}>
                  <FontAwesomeIcon icon={faLock} /> Locked
                </span>
              )}
            </div>
          </AchievementItem>
        ))}
      </AchievementList>
    </div>
  );
}
