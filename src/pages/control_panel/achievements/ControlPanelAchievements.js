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
  const rewardTranslations = {
    "Reward claimed successfully! +": {
      en: "Reward claimed successfully! +",
      es: "¡Recompensa obtenida con éxito! +",
      et: "Preemia edukalt kätte saadud! +",
      lv: "Atlīdzība veiksmīgi saņemta! +",
      pl: "Nagroda została pomyślnie odebrana! +",
      pt: "Recompensa obtida com sucesso! +",
      ru: "Награда успешно получена! +",
      tr: "Ödül başarıyla alındı! +",
      vi: "Nhận phần thưởng thành công! +",
    },
    Unauthorized: {
      en: "Unauthorized",
      es: "No autorizado",
      et: "Luba puudub",
      lv: "Neautorizēts",
      pl: "Nieautoryzowany",
      pt: "Não autorizado",
      ru: "Не авторизован",
      tr: "Yetkisiz",
      vi: "Không được phép",
    },
    "Reward already claimed": {
      en: "Reward already claimed",
      es: "Recompensa ya obtenida",
      et: "Preemia juba saadud",
      lv: "Atlīdzība jau saņemta",
      pl: "Nagroda już odebrana",
      pt: "Recompensa já recebida",
      ru: "Награда уже получена",
      tr: "Ödül zaten alındı",
      vi: "Phần thưởng đã nhận",
    },
    "Milestone not yet completed": {
      en: "Milestone not yet completed",
      es: "Hito aún no completado",
      et: "Sõlm pole veel lõpetatud",
      lv: "Posms vēl nav pabeigts",
      pl: "Kamień milowy jeszcze nie ukończony",
      pt: "Marco ainda não concluído",
      ru: "Этап еще не завершен",
      tr: "Kilometre taşı henüz tamamlanmadı",
      vi: "Mục tiêu chưa hoàn thành",
    },
    "You need to logout from the game first": {
      en: "You need to logout from the game first",
      es: "Necesitas desconectarte del juego primero",
      et: "Peate esmalt mängust välja logima",
      lv: "Vispirms jums jāizrakstās no spēles",
      pl: "Musisz najpierw wylogować się z gry",
      pt: "Você precisa sair do jogo primeiro",
      ru: "Вам нужно выйти из игры",
      tr: "Önce oyundan çıkmanız gerekiyor",
      vi: "Bạn cần đăng xuất khỏi trò chơi trước",
    },
    "Invalid milestone key": {
      en: "Invalid milestone key",
      es: "Clave de hito inválida",
      et: "Vigane sõlmevõti",
      lv: "Nederīga posma atslēga",
      pl: "Nieprawidłowy klucz kamienia milowego",
      pt: "Chave de marco inválida",
      ru: "Неверный ключ этапа",
      tr: "Geçersiz kilometre taşı anahtarı",
      vi: "Khóa mốc không hợp lệ",
    },
  };

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

      let backendMsg = "Failed to claim reward";
      try {
        const data = await response.json();
        backendMsg = data.error || data.message || backendMsg;

        const lang = localStorage.getItem("lang") || "en";
        let translatedMsg = backendMsg;

        // Handle dynamic reward messages
        if (backendMsg.startsWith("Reward claimed successfully! +")) {
          const reward = backendMsg.split("+")[1];
          translatedMsg =
            rewardTranslations["Reward claimed successfully! +"][lang] +
            reward +
            " WCoin";
        } else if (rewardTranslations[backendMsg]) {
          translatedMsg = rewardTranslations[backendMsg][lang];
        }

        // Update achievements if success
        if (response.ok) {
          setAchievements((prev) =>
            prev.map((ach) =>
              ach.key === milestoneKey ? { ...ach, claimed: true } : ach
            )
          );

          // Optional: fetch fresh achievements
          try {
            const refresh = await fetch(
              "https://api.myramu.online/api/achievements",
              { headers: { Authorization: `Bearer ${token}` } }
            );
            const newData = await refresh.json();
            if (refresh.ok) setAchievements(newData.achievements);
          } catch (err) {
            console.error("Failed to refresh achievements:", err);
          }

          setMessages((prev) => ({
            ...prev,
            [milestoneKey]: { type: "success", text: translatedMsg },
          }));
        } else {
          setMessages((prev) => ({
            ...prev,
            [milestoneKey]: { type: "error", text: translatedMsg },
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
                    {ach.progress.toLocaleString()} /{" "}
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
                  <span style={{ color: "#4caf50", fontWeight: "bold" }}>
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
