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
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage(translate("register.passwordMismatch"));
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

      if (response.ok) setMessage(translate("register.success"));
      else if (data.errors) {
        if (data.errors.account) setMessage("❌ " + data.errors.account[0]);
        else if (data.errors.email) setMessage("❌ " + data.errors.email[0]);
        else setMessage(translate("register.somethingWrong"));
      } else setMessage(translate("register.somethingWrong"));
    } catch (err) {
      setMessage(translate("register.serverError", { error: err.message }));
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

            {message && <p>{message}</p>}
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
