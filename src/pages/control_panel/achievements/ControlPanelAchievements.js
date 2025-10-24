import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faLock, faGift } from "@fortawesome/free-solid-svg-icons";
import {
  AchievementList,
  AchievementItem,
  AchievementInfo,
  AchievementReward,
  GreenButton,
} from "../ControlPanelStyles";

export default function ControlPanelAchievements({ achievements, loading }) {
  if (loading) return <p>Loading achievements...</p>;
  if (!achievements?.length) return <p>No achievements found.</p>;

  const getIcon = (type) => {
    switch (type) {
      case "reset":
        return "/assets/icons/reset.png"; // replace with your icon paths
      case "grand_reset":
        return "/assets/icons/grandreset.png";
      case "level":
        return "/assets/icons/level.png";
      default:
        return "/assets/icons/trophy.png";
    }
  };

  return (
    <div>
      <h3>Rewards & Achievements</h3>
      <AchievementList>
        {achievements.map((ach) => (
          <AchievementItem
            key={ach.id}
            claimed={ach.claimed}
            unlocked={ach.unlocked}
          >
            <AchievementInfo claimed={ach.claimed} unlocked={ach.unlocked}>
              <img src={getIcon(ach.type)} alt={ach.name} />
              <div>
                <h4>{ach.name}</h4>
                <p>{ach.description}</p>
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
                <FontAwesomeIcon icon={faGift} /> +{ach.reward} Ruud
              </AchievementReward>

              {ach.unlocked && !ach.claimed ? (
                <GreenButton
                  onClick={() => console.log("Collect reward for:", ach.id)}
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
