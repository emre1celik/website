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
  currentTheme,
  characters,
}) {
  const [claimingKeys, setClaimingKeys] = useState([]);
  const [messages, setMessages] = useState({});
  const { translate } = useTranslation(); const [selectedCharacters, setSelectedCharacters] = useState({});
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
          body: JSON.stringify({
            milestone_key: milestoneKey,
            character_name: selectedCharacters[milestoneKey] || null
          }),
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
        } catch (err) { }
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
          text: "Something went wrong while claiming reward",
        },
      }));
    } finally {
      setClaimingKeys((prev) => prev.filter((k) => k !== milestoneKey));
    }
  };

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "150px",
          fontSize: "1rem",
          color: "#ccc",
          gap: "8px",
        }}
      >
        <FontAwesomeIcon icon={faSpinner} spin />{" "}
        {translate("controlPanel.loading")}
      </div>
    );
  if (!achievements?.length)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "150px",
          fontSize: "1rem",
          color: "#ccc",
          gap: "8px",
        }}
      >
        <FontAwesomeIcon icon={faSpinner} spin />{" "}
        {translate("controlPanel.rewards.noAchievements")}
      </div>
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
      <h3>{translate("controlPanel.rewards.title")}</h3>
      <p>{translate("controlPanel.rewards.description")}</p>
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
                    {translate("controlPanel.rewards.progress")}:{" "}
                    {Number(ach.progress ?? 0).toLocaleString()} /{" "}
                    {Number(ach.required ?? 0).toLocaleString()}
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
                  <FontAwesomeIcon icon={faGift} />
                  <div>+{Number(ach.rewards.wcoin ?? 0).toLocaleString()} WCoin</div>
                  <div>+{Number(ach.rewards.goblin ?? 0).toLocaleString()} Goblin Points</div>
                  <div>+{Number(ach.rewards.ruud ?? 0).toLocaleString()} Ruud</div>
                </AchievementReward>
                {Number(ach.rewards.ruud ?? 0) > 0 && ach.unlocked && !ach.claimed && (
                  <select
                    value={selectedCharacters[ach.key] || ""}
                    onChange={(e) =>
                      setSelectedCharacters((prev) => ({
                        ...prev,
                        [ach.key]: e.target.value,
                      }))
                    }
                    style={{ marginTop: "5px" }}
                  >
                    <option value="">Select Character</option>
                    {characters.map((char) => (
                      <option key={char.name} value={char.name}>
                        {char.name}
                      </option>
                    ))}
                  </select>
                )}
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
                        {translate("controlPanel.rewards.claiming")}
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faTrophy}
                          style={{ marginRight: "5px" }}
                        />
                        {translate("controlPanel.rewards.claim")}
                      </>
                    )}
                  </GreenButton>
                ) : ach.claimed ? (
                  <span
                    style={{ color: currentTheme.primary, fontWeight: "bold" }}
                  >
                    {translate("controlPanel.rewards.claimed")}
                  </span>
                ) : (
                  <span style={{ color: "#888" }}>
                    <FontAwesomeIcon icon={faLock} />{" "}
                    {translate("controlPanel.rewards.locked")}
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
                  backgroundColor: "rgba(176, 176, 176, 0.2)",
                  color: "rgb(204, 204, 204)",
                  border: "1px solid rgb(204, 204, 204)",
                  borderLeft: "6px solid rgb(204, 204, 204)",
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
