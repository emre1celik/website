import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function ControlPanelSettings({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  changingPassword,
  passwordMessage,
  onChangePasswordSubmit,
  translate,
}) {
  return (
    <div>
      <h3>{translate("controlPanel.settings.changePassword")}</h3>
      <form onSubmit={onChangePasswordSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">{translate("controlPanel.settings.newPassword")}</label>
          <br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid #555", borderRadius: "5px", color: "#ccc" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="confirmPassword">{translate("controlPanel.settings.confirmPassword")}</label>
          <br />
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid #555", borderRadius: "5px", color: "#ccc" }}
          />
        </div>

        <button
          type="submit"
          disabled={changingPassword}
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: changingPassword ? "#666" : "#4caf50",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            cursor: changingPassword ? "not-allowed" : "pointer",
          }}
        >
          <FontAwesomeIcon icon={faArrowsRotate} style={{ marginRight: "5px" }} />
          {changingPassword
            ? translate("controlPanel.settings.updating")
            : translate("controlPanel.settings.updated")}
        </button>

        {passwordMessage && (
          <div style={{
            marginTop: "1rem",
            padding: "0.7rem",
            borderRadius: "5px",
            backgroundColor: passwordMessage.type === "success" ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)",
            color: passwordMessage.type === "success" ? "#4caf50" : "#f44336",
            border: `1px solid ${passwordMessage.type === "success" ? "#4caf50" : "#f44336"}`
          }}>
            {passwordMessage.text}
          </div>
        )}
      </form>
    </div>
  );
}
