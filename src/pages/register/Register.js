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
import { Helmet } from "react-helmet";
import { useTranslation } from "../../context/TranslationContext";
import { Link } from "react-router-dom";
import TranslatedJSX from "../../components/language/TranslatedJSX";

function Register({ user }) {
  const { translate } = useTranslation();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "username" ? value.toLowerCase() : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password mismatch
    if (form.password !== form.confirmPassword) {
      setMessage({
        text: translate("register.passwordMismatch"),
        type: "error",
      });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch("https://api.myramu.online/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: form.username.toLowerCase(),
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: translate("register.success"), type: "success" });
      } else if (data.errors) {
        if (data.errors.account)
          setMessage({ text: data.errors.account[0], type: "error" });
        else if (data.errors.email)
          setMessage({ text: data.errors.email[0], type: "error" });
        else
          setMessage({
            text: translate("register.somethingWrong"),
            type: "error",
          });
      } else {
        setMessage({
          text: translate("register.somethingWrong"),
          type: "error",
        });
      }
    } catch (err) {
      setMessage({
        text: translate("register.serverError", { error: err.message }),
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
          Myra MuOnline - Register Account | Season 19 Episode 2-3 | MU Online
        </title>
        <meta
          name="description"
          content="Create your Myra MuOnline account now! Join Season 19 Episode 2-3 and play on the best MU Online private server. Register quickly and start your adventure."
        />
        <meta
          name="keywords"
          content="mu online register, myra mu register, mu online account, myra season 19 register, myra private server registration"
        />
      </Helmet>

      <RegisterWrapper>
        <Navigation user={user} />

        <RegisterContent>
          <RegisterBox>
            <h2>{translate("register.header")}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder={translate("register.username")}
                value={form.username}
                onChange={handleChange}
                required
                minLength={6}
                maxLength={10}
              />
              <input
                type="email"
                name="email"
                placeholder={translate("register.email")}
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder={translate("register.password")}
                value={form.password}
                onChange={handleChange}
                minLength={6}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder={translate("register.confirmPassword")}
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  translate("register.button")
                )}
              </button>

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
                {translate("register.alreadyAccount")}{" "}
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#4caf50" }}
                >
                  {translate("register.loginHere")}
                </Link>
              </p>

              <p style={{ marginTop: 0 }}>
                <TranslatedJSX
                  entity="register.legal"
                  replacements={{
                    terms: (
                      <Link
                        to="/terms"
                        style={{ textDecoration: "none", color: "#4caf50" }}
                      >
                        {translate("register.terms")}
                      </Link>
                    ),
                    privacy: (
                      <Link
                        to="/privacy"
                        style={{ textDecoration: "none", color: "#4caf50" }}
                      >
                        {translate("register.privacy")}
                      </Link>
                    ),
                  }}
                />
              </p>
            </form>
          </RegisterBox>
        </RegisterContent>

        <Footer>
          <p>© 2025 MyraMU. All rights reserved.</p>
        </Footer>
      </RegisterWrapper>
    </>
  );
}

export default Register;
