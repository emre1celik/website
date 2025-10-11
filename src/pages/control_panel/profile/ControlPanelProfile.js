import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { GreenButton } from "../ControlPanelStyles";

export default function ControlPanelProfile({ profile, translate, loading }) {
  if (loading) return <p><FontAwesomeIcon icon={faSpinner} spin /> {translate("controlPanel.loading")}</p>;
  if (!profile) return <p><FontAwesomeIcon icon={faSpinner} spin /> {translate("controlPanel.notLoad")}</p>;

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
            <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "5px" }} /> {translate("controlPanel.profile.buy")}
          </GreenButton>
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}> 
        <label>{translate("controlPanel.profile.goblinPoints")}</label> 
        <br /> 
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.3rem" }} > 
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
          <GreenButton style={{ flex: 1 }}> 
            <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "5px" }} /> {translate("controlPanel.profile.buy")} 
          </GreenButton> 
        </div> 
      </div> 
      
      <div style={{ marginBottom: "1rem" }}> 
        <label>{translate("controlPanel.profile.lastLogin")}</label> 
        <br /> 
        <input type="text" value={profile.last_login} disabled style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid #555", borderRadius: "5px", color: "#ccc", }} /> 
      </div> 
    </div>
  );
}
