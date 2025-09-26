import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://api.myramu.online/api/login", {
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
        navigate("/control-panel"); // <-- client-side navigation, no page reload
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
          <h2>Control Panel</h2>
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
          {message && <p>{message}</p>}
          <p style={{ fontSize: "0.9rem" }}>
            Don’t have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#4caf50", textDecoration: "none" }}
            >
              Register here
            </Link>
          </p>
        </div>
      </header>
      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
