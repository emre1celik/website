import React, { useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://api.myramu.online/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Account created successfully!");
      } else if (data.errors) {
        if (data.errors.account) {
          setMessage("❌ " + data.errors.account[0]);
        } else if (data.errors.email) {
          setMessage("❌ " + data.errors.email[0]);
        } else {
          setMessage("❌ Something went wrong");
        }
      } else {
        setMessage("❌ Something went wrong");
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
          <h2>Create an Account</h2>
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
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
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
                "Register"
              )}
            </button>

            <p style={{ fontSize: "0.9rem" }}>
              Already have an account?{" "}
              <a
                href="/login"
                style={{ color: "#4caf50", textDecoration: "underline" }}
              >
                Login here
              </a>
            </p>
            <p style={{ fontSize: "0.85rem", color: "#ccc" }}>
              By creating an account, you agree to our{" "}
              <a
                href="/terms"
                style={{ color: "#4caf50", textDecoration: "underline" }}
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                style={{ color: "#4caf50", textDecoration: "underline" }}
              >
                Privacy Policy
              </a>
              .
            </p>
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

export default Register;
