import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ControlPanel from "./pages/controlPanel/ControlPanel";
import Downloads from "./pages/downloads/Downloads";
import NotFound from "./pages/notFound/NotFound";
import Highscores from "./pages/highscores/Highscores";
import CookieBanner from "./components/cookies/CookieBanner";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/register" element={<Register user={user} />} />
        <Route
          path="/login"
          element={<Login onLogin={setUser} user={user} />}
        />
        <Route
          path="/control-panel"
          element={
            user ? <ControlPanel user={user} /> : <Login onLogin={setUser} />
          }
        />
        <Route path="/downloads" element={<Downloads user={user} />} />
        <Route path="/highscores" element={<Highscores user={user} />} />
        <Route path="*" element={<NotFound user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
