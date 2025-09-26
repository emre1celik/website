import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Register from "./Register";
import Login from "./Login";
import NotFound from "./NotFound";
import ControlPanel from "./ControlPanel";
import Downloads from "./Downloads";
import CookieBanner from "./components/cookies/CookieBanner";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/register" element={<Register user={user} />} />
        <Route path="/login" element={<Login onLogin={setUser} user={user} />} />
        <Route
          path="/control-panel"
          element={
            user ? <ControlPanel user={user} /> : <Login onLogin={setUser} />
          }
        />
        <Route path="/downloads" element={<Downloads user={user} />} />
        <Route path="*" element={<NotFound user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
