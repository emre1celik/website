import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ControlPanelProfile({ profile, translate }) {
  if (!profile) return <p>{translate("controlPanel.notLoad")}</p>;

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
          <button style={{ flex: 1, padding: "0.5rem", borderRadius: "5px" }}>
            <FontAwesomeIcon icon={faCartShopping} /> {translate("controlPanel.profile.buy")}
          </button>
        </div>
      </div>

      {/* Add remaining profile fields similarly */}
    </div>
  );
}
