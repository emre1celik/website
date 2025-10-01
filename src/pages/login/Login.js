import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { LoginWrapper, LoginContent, LoginBox } from "./LoginStyles";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

function Login({ user, onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
        const { token } = data;
        localStorage.setItem("apiToken", token);
        onLogin(data.username);
        setMessage("✅ Logged in successfully!");
        navigate("/control-panel");
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
    <>
      <Helmet>
        <title>
          Myra MuOnline - Login | Season 19 Episode 2-3 | MU Online Private
          Server
        </title>
        <meta
          name="description"
          content="Login to your Myra MuOnline account and continue your journey in Season 19 Episode 2-3. Access your stats, items, and enjoy the ultimate MU Online experience."
        />
        <meta
          name="keywords"
          content="mu online login, myra mu login, mu private server login, season 19 ep2 login, myra account login"
        />
      </Helmet>

      <LoginWrapper>
        <Navigation user={user} />

        <LoginContent>
          <LoginBox>
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
                {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Login"}
              </button>
            </form>

            {message && <p>{message}</p>}

            <p>
              Don’t have an account?{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#4caf50" }}
              >
                Register here
              </Link>
            </p>
          </LoginBox>
        </LoginContent>

        <Footer>
          <p>© 2025 MyraMU. All rights reserved.</p>
        </Footer>
      </LoginWrapper>
    </>
  );
}

export default Login;
