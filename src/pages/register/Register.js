import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  RegisterWrapper,
  RegisterContent,
  RegisterBox,
} from "./RegisterStyles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

function Register({ user }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

      if (response.ok) setMessage("✅ Account created successfully!");
      else if (data.errors) {
        if (data.errors.account) setMessage("❌ " + data.errors.account[0]);
        else if (data.errors.email) setMessage("❌ " + data.errors.email[0]);
        else setMessage("❌ Something went wrong");
      } else setMessage("❌ Something went wrong");
    } catch (err) {
      setMessage("❌ Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterWrapper>
      <Navigation user={user} />

      <RegisterContent>
        <RegisterBox>
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
              {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Register"}
            </button>

            <p>
              Already have an account? <a href="/login" style={{ textDecoration: "none", color: "#4caf50" }}>Login here</a>
            </p>
            <p style={{ marginTop: 0 }}>
              By creating an account, you agree to our <a href="/terms" style={{ textDecoration: "none", color: "#4caf50" }}>Terms & Conditions</a> and <a href="/privacy" style={{ textDecoration: "none", color: "#4caf50" }}>Privacy Policy</a>.
            </p>
          </form>

          {message && <p>{message}</p>}
        </RegisterBox>
      </RegisterContent>

      <Footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </Footer>
    </RegisterWrapper>
  );
}

export default Register;
