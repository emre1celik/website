import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSpinner,
  faArrowsRotate,
  faSackDollar,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { GreenButton } from "../ControlPanelStyles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  paymentMessage,
  openDonateModal,
  setOpenDonateModal,
}) {
  const [showDonateModal, setShowDonateModal] = useState(openDonateModal);

  useEffect(() => {
    if (openDonateModal) setShowDonateModal(true);
  }, [openDonateModal]);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [payLoading, setPayLoading] = useState(false);

  const navigate = useNavigate();
  async function handleBuyWcoin() {
    if (!selectedPackage) return;
    setPayLoading(true);

    const token = localStorage.getItem("apiToken");

    try {
      const response = await fetch(
        "https://api.myramu.online/api/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            package: selectedPackage,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url; // redirect to Stripe/PayPal checkout
      } else {
        alert(data.error || "Payment creation failed.");
      }
    } catch (err) {
      alert("Server error: " + err.message);
    } finally {
      setPayLoading(false);
    }
  }

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
  if (!profile)
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
        {translate("controlPanel.notLoad")}
      </div>
    );

  function handleLogout() {
    localStorage.removeItem("apiToken");
    navigate("/login");
  }

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
          <GreenButton
            style={{ flex: 1 }}
            onClick={() => setShowDonateModal(true)}
          >
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
            width: "100%",
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
      {showDonateModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: "#1e1e1e",
              padding: "2rem",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px",
            }}
          >
            <h3 style={{ marginBottom: "1rem" }}>
              <FontAwesomeIcon icon={faSackDollar} /> Buy WCoin
            </h3>
            {paymentMessage && (
              <div
                style={{
                  padding: "0.7rem",
                  borderRadius: "5px",
                  marginBottom: "1rem",
                  backgroundColor:
                    paymentMessage.type === "success"
                      ? "rgba(76, 175, 80, 0.2)"
                      : paymentMessage.type === "error"
                      ? "rgba(244, 67, 54, 0.2)"
                      : "rgba(255,255,255,0.1)",
                  color:
                    paymentMessage.type === "success"
                      ? "#4caf50"
                      : paymentMessage.type === "error"
                      ? "#f44336"
                      : "#ccc",
                  border: `1px solid ${
                    paymentMessage.type === "success" ? "#4caf50" : "#f44336"
                  }`,
                }}
              >
                {paymentMessage.text}
              </div>
            )}

            <div style={{ marginBottom: "1rem" }}>
              <label>Select Package</label>
              <select
                value={selectedPackage || ""}
                onChange={(e) => setSelectedPackage(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  backgroundColor: "#111",
                  color: "#ccc",
                  border: "1px solid #444",
                  borderRadius: "5px",
                  marginTop: "0.3rem",
                }}
              >
                <option value="">Choose...</option>
                <option value="500">€5 — 500 WCoin</option>
                <option value="1100">€10 — 1100 WCoin</option>
                <option value="2300">€20 — 2300 WCoin</option>
                <option value="6000">€50 — 6000 WCoin</option>
              </select>
            </div>

            <button
              disabled={!selectedPackage || payLoading}
              onClick={handleBuyWcoin}
              style={{
                padding: "0.7rem 1rem",
                backgroundColor: selectedPackage ? "#4caf50" : "#444",
                border: "none",
                color: "#fff",
                width: "100%",
                marginBottom: "0.5rem",
                cursor: selectedPackage ? "pointer" : "not-allowed",
                borderRadius: "8px",
              }}
            >
              {payLoading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                "Continue to Payment"
              )}
            </button>

            <button
              onClick={() => {
                setShowDonateModal(false);
                setOpenDonateModal(false); // ← important!
              }}
              style={{
                width: "100%",
                padding: "0.7rem 1rem",
                backgroundColor: "#555",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
