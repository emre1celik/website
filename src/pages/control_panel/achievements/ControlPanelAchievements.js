import { useState } from "react";
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
import { useTranslation } from "../../../context/TranslationContext";

export default function ControlPanelAchievements({
  achievements,
  loading,
  setLoading,
  setAchievements,
}) {
  const [claimingKeys, setClaimingKeys] = useState([]);
  const [messages, setMessages] = useState({});
  const { translate } = useTranslation();

  const claimReward = async (milestoneKey) => {
    if (claimingKeys.includes(milestoneKey)) return;
    setClaimingKeys((prev) => [...prev, milestoneKey]);

    const token = localStorage.getItem("apiToken");

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
        setAchievements((prev) =>
          prev.map((ach) =>
            ach.key === milestoneKey ? { ...ach, claimed: true } : ach
          )
        );
        // 🟢 fetch fresh achievements (unlocks the next ones automatically)
        try {
          const refresh = await fetch(
            "https://api.myramu.online/api/achievements",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const newData = await refresh.json();
          if (refresh.ok) {
            setAchievements(newData.achievements);
          }
        } catch (err) {
          console.error("Failed to refresh achievements:", err);
        }

        setMessages((prev) => ({
          ...prev,
          [milestoneKey]: { type: "success", text: data.message },
        }));
      } else {
        let errorMsg = "Failed to claim reward";
        try {
          const errData = await response.json();
          errorMsg = errData.error || errorMsg;
        } catch (err) {}
        setMessages((prev) => ({
          ...prev,
          [milestoneKey]: { type: "error", text: errorMsg },
        }));
      }
    } catch (err) {
      setMessages((prev) => ({
        ...prev,
        [milestoneKey]: {
          type: "error",
          text: "Server error while claiming reward",
        },
      }));
    } finally {
      setClaimingKeys((prev) => prev.filter((k) => k !== milestoneKey));
    }
  };

  if (loading)
    return (
      <p>
        <FontAwesomeIcon icon={faSpinner} spin />{" "}
        {translate("controlPanel.loading")}
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
        awesome WCoin rewards and great item rewards. Keep playing and collect
        more rewards!
      </p>
      <AchievementList>
        {achievements.map((ach) => (
          <>
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
                    Progress: {ach.progress.toLocaleString()} /{" "}
                    {ach.required.toLocaleString()}
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
                  {ach.reward_ruud.toLocaleString()} WCoin
                </AchievementReward>

                {ach.unlocked && !ach.claimed ? (
                  <GreenButton
                    onClick={() => claimReward(ach.key)}
                    style={{ marginTop: "5px" }}
                    disabled={claimingKeys.includes(ach.key)}
                  >
                    {claimingKeys.includes(ach.key) ? (
                      <>
                        <FontAwesomeIcon
                          icon={faSpinner}
                          spin
                          style={{ marginRight: "5px" }}
                        />
                        Claiming...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faTrophy}
                          style={{ marginRight: "5px" }}
                        />
                        Collect
                      </>
                    )}
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
            {messages[ach.key] && (
              <div
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "5px",
                  backgroundColor:
                    messages[ach.key].type === "success"
                      ? "rgba(76, 175, 80, 0.2)"
                      : "rgba(244, 67, 54, 0.2)",
                  color:
                    messages[ach.key].type === "success"
                      ? "#4caf50"
                      : "#f44336",
                  border: `1px solid ${
                    messages[ach.key].type === "success" ? "#4caf50" : "#f44336"
                  }`,
                  borderLeft:
                    messages[ach.key].type === "success"
                      ? "6px solid #4caf50"
                      : "6px solid #f44336",
                }}
              >
                {messages[ach.key].type === "success" ? (
                  <FontAwesomeIcon icon={faGift} />
                ) : (
                  <FontAwesomeIcon icon={faLock} />
                )}{" "}
                {messages[ach.key].text}
              </div>
            )}
          </>
        ))}
      </AchievementList>
    </div>
  );
}
