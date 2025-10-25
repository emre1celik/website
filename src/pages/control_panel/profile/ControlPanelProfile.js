import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSpinner,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { GreenButton } from "../ControlPanelStyles";

export default function ControlPanelProfile({
  profile,
  translate,
  loading,
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  changingPassword,
  passwordMessage,
  onChangePasswordSubmit,
}) {
  if (loading)
    return (
      <p>
        <FontAwesomeIcon icon={faSpinner} spin />{" "}
        {translate("controlPanel.loading")}
      </p>
    );
  if (!profile)
    return (
      <p>
        <FontAwesomeIcon icon={faSpinner} spin />{" "}
        {translate("controlPanel.notLoad")}
      </p>
    );

  return (
    <div>
      <h3>{translate("controlPanel.profile.accountInformation")}</h3>

      <div style={{ marginBottom: "1rem" }}>
        <label>{translate("controlPanel.profile.email")}</label>
        <br />
        <input
          type="text"
          value={profile.email}
          disabled
          style={{
            width: "100%",
            padding: "0.5rem",
            marginTop: "0.3rem",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid #555",
            borderRadius: "5px",
            color: "#ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>{translate("controlPanel.profile.accountName")}</label>
        <br />
        <input
          type="text"
          value={profile.accountName}
          disabled
          style={{
            width: "100%",
            padding: "0.5rem",
            marginTop: "0.3rem",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid #555",
            borderRadius: "5px",
            color: "#ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>{translate("controlPanel.profile.wcoin")}</label>
        <br />
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.3rem" }}>
          <input
            type="text"
            value={profile.wcoin.toLocaleString()}
            disabled
            style={{
              flex: 2,
              padding: "0.5rem",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid #555",
              borderRadius: "5px",
              color: "#ccc",
            }}
          />
          <GreenButton style={{ flex: 1 }}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ marginRight: "5px" }}
            />{" "}
            {translate("controlPanel.profile.buy")}
          </GreenButton>
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>{translate("controlPanel.profile.goblinPoints")}</label>
        <br />
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.3rem" }}>
          <input
            type="number"
            value={profile.goblin_points.toLocaleString()}
            disabled
            style={{
              flex: 2,
              padding: "0.5rem",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid #555",
              borderRadius: "5px",
              color: "#ccc",
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>{translate("controlPanel.profile.lastLogin")}</label>
        <br />
        <input
          type="text"
          value={profile.last_login}
          disabled
          style={{
            width: "100%",
            padding: "0.5rem",
            marginTop: "0.3rem",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid #555",
            borderRadius: "5px",
            color: "#ccc",
          }}
        />
      </div>

      <hr style={{ borderColor: "#333", margin: "2rem 0" }} />
      <h3>{translate("controlPanel.settings.changePassword")}</h3>
      <form onSubmit={onChangePasswordSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">
            {translate("controlPanel.settings.newPassword")}
          </label>
          <br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.3rem",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid #555",
              borderRadius: "5px",
              color: "#ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="confirmPassword">
            {translate("controlPanel.settings.confirmPassword")}
          </label>
          <br />
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.3rem",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid #555",
              borderRadius: "5px",
              color: "#ccc",
            }}
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
          <FontAwesomeIcon
            icon={faArrowsRotate}
            style={{ marginRight: "5px" }}
          />
          {changingPassword
            ? translate("controlPanel.settings.updating")
            : translate("controlPanel.settings.updated")}
        </button>

        {passwordMessage && (
          <div
            style={{
              marginTop: "1rem",
              padding: "0.7rem",
              borderRadius: "5px",
              backgroundColor:
                passwordMessage.type === "success"
                  ? "rgba(76, 175, 80, 0.2)"
                  : "rgba(244, 67, 54, 0.2)",
              color: passwordMessage.type === "success" ? "#4caf50" : "#f44336",
              border: `1px solid ${
                passwordMessage.type === "success" ? "#4caf50" : "#f44336"
              }`,
            }}
          >
            {passwordMessage.text}
          </div>
        )}
      </form>
    </div>
  );
}
