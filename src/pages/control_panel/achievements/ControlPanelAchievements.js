import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faLock,
  faGift,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  AchievementList,
  AchievementItem,
  AchievementInfo,
  AchievementReward,
  GreenButton,
} from "../ControlPanelStyles";
import EventIcon from "../../../assets/images/classes/event.png";
import ResetIcon from "../../../assets/images/classes/reset.png";
import StatsIcon from "../../../assets/images/classes/stats.png";
import CharactersIcon from "../../../assets/images/classes/characters.png";

export default function ControlPanelAchievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);

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
          setAchievements(data.achievements);
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

  const claimReward = async (milestoneKey) => {
    const token = localStorage.getItem("apiToken");
    if (claiming) return;

    setClaiming(true);
    try {
      const response = await fetch(
        "https://api.myramu.online/api/achievements/claim",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ milestone_key: milestoneKey }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setAchievements((prev) =>
          prev.map((ach) =>
            ach.key === milestoneKey ? { ...ach, claimed: true } : ach
          )
        );
      } else {
        // Try to parse error message if JSON, otherwise fallback
        let errorMsg = "Failed to claim reward";
        try {
          const errData = await response.json();
          errorMsg = errData.error || errorMsg;
        } catch (err) {
          console.error("Non-JSON response", err);
        }
        alert(errorMsg);
      }
    } catch (err) {
      console.error(err);
      alert("Server error while claiming reward");
    } finally {
      setClaiming(false);
    }
  };

  if (loading)
    return (
      <p>
        <FontAwesomeIcon icon={faSpinner} spin /> Loading achievements...
      </p>
    );
  if (!achievements?.length)
    return (
      <p>
        <FontAwesomeIcon icon={faSpinner} spin /> No achievements found.
      </p>
    );

  const getIcon = (type) => {
    switch (type) {
      case "resets":
        return ResetIcon;
      case "bloodcastle":
      case "devilsquare":
        return EventIcon;
      case "characters":
        return CharactersIcon;
      case "stats":
        return StatsIcon;
      default:
        return EventIcon;
    }
  };

  return (
    <div>
      <h3>Rewards</h3>
      <p>
        Your achievements count all your characters on this account! Every
        reset, Blood Castle victory, and Devil Square conquest adds up to unlock
        awesome Ruud rewards and great item rewards. Keep playing and collect
        more rewards!
      </p>
      <AchievementList>
        {achievements.map((ach) => (
          <AchievementItem
            key={ach.key}
            claimed={ach.claimed}
            unlocked={ach.unlocked}
          >
            <AchievementInfo claimed={ach.claimed} unlocked={ach.unlocked}>
              <img src={getIcon(ach.type)} alt={ach.label} />
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
                  onClick={() => claimReward(ach.key)}
                  style={{ marginTop: "5px" }}
                  disabled={claiming}
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
