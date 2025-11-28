import { useEffect, useState } from "react";

export default function ControlPanelPayment() {
  const [message, setMessage] = useState("Finalizing your payment...");

  useEffect(() => {
    async function finalizePayment() {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get("token"); // PayPal sends ?token=ORDERID

      if (!orderId) {
        setMessage("Missing order ID.");
        return;
      }

      try {
        const response = await fetch(
          "https://api.myramu.online/api/paypal/capture",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ order_id: orderId }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setMessage("🎉 Payment successful! Your WCoin has been added.");
        } else {
          setMessage("❌ " + (data.error || "Payment could not be completed."));
        }
      } catch (err) {
        setMessage("Server error: " + err.message);
      }
    }

    finalizePayment();
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "#fff" }}>
      <h2>{message}</h2>

      <button
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          backgroundColor: "#4caf50",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/control-panel")}
      >
        Go back to Control Panel
      </button>
    </div>
  );
}
