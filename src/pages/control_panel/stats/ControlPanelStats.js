import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faLocationCrosshairs,
  faUpLong,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import {
  CharacterActions,
  CharacterCard,
  CharacterHeader,
  CharacterStats,
  ControlPanelStatsButtonText,
  GreenButton,
  MountSelector,
} from "../ControlPanelStyles";

export default function ControlPanelStats({
  characters,
  charsLoading,
  characterActionMessage,
  actionLoading,
  handleCharacterAction,
  translate,
  getClassInfo,
  classNamesMap,
  changeMount,
}) {
  if (charsLoading)
    return (
      <p>
        <FontAwesomeIcon icon={faSpinner} spin />{" "}
        {translate("controlPanel.stats.loadingCharacters")}
      </p>
    );
  if (!characters.length)
    return (
      <p>
        <FontAwesomeIcon icon={faSpinner} spin />{" "}
        {translate("controlPanel.stats.noCharacters")}
      </p>
    );

  return (
    <div>
      <h3>{translate("controlPanel.stats.characterStatistics")}</h3>
      {characterActionMessage && (
        <div
          style={{
            width: "100%",
            marginBottom: "1rem",
            padding: "0.7rem",
            borderRadius: "5px",
            marginTop: "15px",
            backgroundColor:
              characterActionMessage.type === "success"
                ? "rgba(76, 175, 80, 0.2)"
                : "rgba(244, 67, 54, 0.2)",
            color:
              characterActionMessage.type === "success" ? "#4caf50" : "#f44336",
            border: `1px solid ${
              characterActionMessage.type === "success" ? "#4caf50" : "#f44336"
            }`,
            borderLeft:
              characterActionMessage.type === "success"
                ? "6px solid #4caf50"
                : "6px solid #f44336",
          }}
        >
          {characterActionMessage.text}
        </div>
      )}

      {characters.map((char) => {
        const classInfo = getClassInfo(char.race);
        const mountKey = `${char.name}_change-mount`;

        return (
          <CharacterCard key={char.name}>
            <CharacterHeader>
              <h4>{char.name}</h4>
              <div className="class-info">
                <img src={classInfo.icon} alt={classInfo.key} />
                <span>{classNamesMap[classInfo.key] || "Unknown"}</span>
              </div>
            </CharacterHeader>

            <CharacterStats>
              <p>
                <strong>{translate("controlPanel.stats.level")}:</strong>{" "}
                {char.level}
              </p>
              <p>
                <strong>{translate("controlPanel.stats.resets")}:</strong>{" "}
                {char.reset}
              </p>
              {char.giant_model !== null && (
                <MountSelector>
                  <label>{translate("controlPanel.stats.giant_mount")}:</label>
                  {actionLoading[mountKey] ? (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ color: "#ccc" }}
                    />
                  ) : (
                    <select
                      value={char.giant_model}
                      onChange={(e) => changeMount(e, char)}
                    >
                      <option value={1}>Silver</option>
                      <option value={2}>Gold</option>
                      <option value={3}>Blue</option>
                    </select>
                  )}
                </MountSelector>
              )}
            </CharacterStats>

            <CharacterActions>
              {["unstuck", "evolve", "grand-reset"].map((action) => {
                const key = `${char.name}_${action}`;
                const iconMap = {
                  unstuck: faLocationCrosshairs,
                  evolve: faUpLong,
                  "grand-reset": faArrowsRotate,
                };
                const labelMap = {
                  unstuck: translate("controlPanel.stats.actions.unstuck"),
                  evolve: translate("controlPanel.stats.actions.evolve"),
                  "grand-reset": translate(
                    "controlPanel.stats.actions.grandReset"
                  ),
                };

                return (
                  <GreenButton
                    key={action}
                    disabled={actionLoading[key]}
                    onClick={() => handleCharacterAction(char.name, action)}
                    style={{ width: "100%" }}
                  >
                    <FontAwesomeIcon
                      icon={actionLoading[key] ? faSpinner : iconMap[action]}
                      spin={actionLoading[key]}
                      style={{ marginRight: "5px" }}
                    />
                    <ControlPanelStatsButtonText>
                      {actionLoading[key]
                        ? translate("controlPanel.stats.processing")
                        : labelMap[action]}
                    </ControlPanelStatsButtonText>
                  </GreenButton>
                );
              })}
            </CharacterActions>
          </CharacterCard>
        );
      })}
    </div>
  );
}
