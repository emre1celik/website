import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ControlPanel from "./pages/control_panel/ControlPanel";
import Downloads from "./pages/downloads/Downloads";
import NotFound from "./pages/not_found/NotFound";
import Highscores from "./pages/highscores/Highscores";
import CookieBanner from "./components/cookies/CookieBanner";
import Events from "./pages/events/Events";
import { TranslationProvider } from "./context/TranslationContext";
import Info from "./pages/info/Info";
import { greenTheme, blueTheme, redTheme } from "./styles/ThemeStyles";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const themes = {
  green: greenTheme,
  blue: blueTheme,
  red: redTheme,
};

// 👇 Fade wrapper
const ThemeFade = styled.div`
  min-height: 100vh;
  transition: opacity 0.35s ease;
  opacity: ${({ $fading }) => ($fading ? 0 : 1)};
`;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    const username = localStorage.getItem("username");

    if (token && username) {
      setUser(username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("apiToken");
    localStorage.removeItem("username");
    setUser(null);
  };

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return themes[saved] || redTheme;
  });

  const [fading, setFading] = useState(false);
  useEffect(() => {
    if (theme?.name) {
      localStorage.setItem("theme", theme.name);
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    if (!newTheme || newTheme.name === theme.name) return;
    setFading(true);
    setTimeout(() => {
      setTheme(newTheme);
      setFading(false);
    }, 120);
  };

  return (
    <TranslationProvider>
      <Router>
        <CookieBanner />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ThemeFade $fading={fading}>
            <Routes>
              <Route
                path="/"
                element={
                  <Landing
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <Register
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <Login
                    onLogin={setUser}
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/control-panel"
                element={
                  user ? (
                    <ControlPanel
                      user={user}
                      currentTheme={theme}
                      onThemeChange={handleThemeChange}
                      onLogout={handleLogout}
                    />
                  ) : (
                    <Login
                      onLogin={setUser}
                      currentTheme={theme}
                      onThemeChange={handleThemeChange}
                    />
                  )
                }
              />
              <Route
                path="/payment-success"
                element={
                  <ControlPanel
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/payment-cancel"
                element={
                  <ControlPanel
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/downloads"
                element={
                  <Downloads
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/highscores"
                element={
                  <Highscores
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/events"
                element={
                  <Events
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="/info"
                element={
                  <Info
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <NotFound
                    user={user}
                    currentTheme={theme}
                    onThemeChange={handleThemeChange}
                  />
                }
              />
            </Routes>
          </ThemeFade>
        </ThemeProvider>
      </Router>
    </TranslationProvider>
  );
}

export default App;
