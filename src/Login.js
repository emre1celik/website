import React, { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://api.myramu.online/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: form.username,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // call parent callback to update logged-in user
        onLogin(data.username);
        setMessage("✅ Logged in successfully!");
        window.location.href = "/control-panel";
      } else {
        setMessage(data.error || "❌ Invalid username or password");
      }
    } catch (err) {
      setMessage("❌ Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navigation />
      <header className="hero">
        <div className="register-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  spin
                  style={{ marginRight: "6px" }}
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
          {message && <p style={{ marginTop: "3rem" }}>{message}</p>}
        </div>
      </header>
      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
