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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    const username = localStorage.getItem("username");

    if (token && username) {
      setUser(username);
    }
  }, []);

  const [theme, setTheme] = useState(redTheme);

  return (
    <TranslationProvider>
      <Router>
        <CookieBanner />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
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
                  onThemeChange={setTheme}
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
                    onThemeChange={setTheme}
                  />
                ) : (
                  <Login
                    onLogin={setUser}
                    currentTheme={theme}
                    onThemeChange={setTheme}
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
                  onThemeChange={setTheme}
                />
              }
            />
            <Route
              path="/payment-cancel"
              element={
                <ControlPanel
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
            <Route
              path="/downloads"
              element={
                <Downloads
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
            <Route
              path="/highscores"
              element={
                <Highscores
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
            <Route
              path="/events"
              element={
                <Events
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
            <Route
              path="/info"
              element={
                <Info
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFound
                  user={user}
                  currentTheme={theme}
                  onThemeChange={setTheme}
                />
              }
            />
          </Routes>
        </ThemeProvider>
      </Router>
    </TranslationProvider>
  );
}

export default App;
