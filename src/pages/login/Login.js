import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { LoginWrapper, LoginContent, LoginBox } from "./LoginStyles";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "../../context/TranslationContext";

function Login({ user, onLogin }) {
  const { translate } = useTranslation();
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" }); // ✅ reset correctly

    try {
      const response = await fetch("https://api.myramu.online/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: form.username.toLowerCase(),
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token } = data;
        localStorage.setItem("apiToken", token);
        onLogin(data.username);
        setMessage({ text: translate("login.success"), type: "success" });
        navigate("/control-panel");
      } else {
        setMessage({ text: translate("login.invalid"), type: "error" });
      }
    } catch (err) {
      setMessage({
        text: translate("login.serverError", { error: err.message }),
        type: "error",
      });
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
            <h2>{translate("login.header")}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder={translate("login.username")}
                value={form.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder={translate("login.password")}
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  translate("login.button")
                )}
              </button>
            </form>

            {message.text && (
              <div
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  borderRadius: "5px",
                  marginTop: "15px",
                  backgroundColor:
                    message.type === "success"
                      ? "rgba(76, 175, 80, 0.2)"
                      : "rgba(244, 67, 54, 0.2)",
                  color: message.type === "success" ? "#4caf50" : "#f44336",
                  border: `1px solid ${
                    message.type === "success" ? "#4caf50" : "#f44336"
                  }`,
                  borderLeft:
                    message.type === "success"
                      ? "6px solid #4caf50"
                      : "6px solid #f44336",
                }}
              >
                {message.text}
              </div>
            )}

            <p>
              {translate("login.noAccount")}{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#4caf50" }}
              >
                {translate("login.registerHere")}
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
