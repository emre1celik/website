import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faLocationCrosshairs, faUpLong, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { GreenButton } from "../ControlPanelStyles";

export default function ControlPanelStats({ characters, charsLoading, characterActionMessage, actionLoading, handleCharacterAction, translate, getClassInfo, classNamesMap, changeMount }) {
  if (charsLoading) return <p><FontAwesomeIcon icon={faSpinner} spin /> {translate("controlPanel.stats.loadingCharacters")}</p>;
  if (!characters.length) return <p><FontAwesomeIcon icon={faSpinner} spin /> {translate("controlPanel.stats.noCharacters")}</p>;

  return (
    <div>
      <h3>{translate("controlPanel.stats.characterStatistics")}</h3>
      {characterActionMessage && (
        <div style={{
          width: "100%",
          marginBottom: "1rem",
          padding: "0.7rem",
          borderRadius: "5px",
          marginTop: "15px",
          backgroundColor: characterActionMessage.type === "success" ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)",
          color: characterActionMessage.type === "success" ? "#4caf50" : "#f44336",
          border: `1px solid ${characterActionMessage.type === "success" ? "#4caf50" : "#f44336"}`
        }}>{characterActionMessage.text}</div>
      )}

      {characters.map((char) => {
        const classInfo = getClassInfo(char.race);

        return (
          <div key={char.name} style={{ marginBottom: "1.5rem", padding: "1rem", border: "1px solid #555", borderRadius: "8px", background: "rgba(255,255,255,0.05)" }}>
            <p><strong>{translate("controlPanel.stats.name")}:</strong> {char.name}</p>
            <p><strong>{translate("controlPanel.stats.level")}:</strong> {char.level}</p>
            <p><strong>{translate("controlPanel.stats.resets")}:</strong> {char.reset}</p>
            <p>
              <strong>{translate("controlPanel.stats.race")}:</strong>
              <img src={classInfo.icon} alt={classInfo.key} style={{ width: "24px", height: "24px", marginRight: "6px", verticalAlign: "middle" }} />
              {classNamesMap[classInfo.key] || "Unknown"}
            </p>

            {char.giant_model !== null && (
              <div>
                <label style={{ color: "#ccc", fontWeight: "bold", marginRight: "15px" }}>
                  (5th class) Giant Mount:
                </label>
                <select
                  value={char.giant_model}
                  onChange={(e) => changeMount(e, char)}
                  style={{
                    padding: "0.2rem",
                    borderRadius: "5px",
                    border: "1px solid #555",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#ccc"
                  }}
                >
                  <option value={1}>Model 1</option>
                  <option value={2}>Model 2</option>
                  <option value={3}>Model 3</option>
                </select>
              </div>
            )}

            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
              {["unstuck", "evolve", "grand-reset"].map((action) => {
                const key = `${char.name}_${action}`;
                const iconMap = { unstuck: faLocationCrosshairs, evolve: faUpLong, "grand-reset": faArrowsRotate };
                const labelMap = {
                  unstuck: translate("controlPanel.stats.actions.unstuck"),
                  evolve: translate("controlPanel.stats.actions.evolve"),
                  "grand-reset": translate("controlPanel.stats.actions.grandReset")
                };

                return (
                  <GreenButton key={action} disabled={actionLoading[key]} onClick={() => handleCharacterAction(char.name, action)}>
                    <FontAwesomeIcon icon={actionLoading[key] ? faSpinner : iconMap[action]} spin={actionLoading[key]} style={{ marginRight: "5px" }} />
                    {actionLoading[key] ? translate("controlPanel.stats.processing") : labelMap[action]}
                  </GreenButton>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
