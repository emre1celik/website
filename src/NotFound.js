import React from "react";
import "./App.css"; // reuse existing styles

function NotFound() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">MyraMU</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#download">Download</a>
          </li>
          <li>
            <a href="/#community">Community</a>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <h1>404 - Page Not Found</h1>
        <p>Oops! We can’t find the page you’re looking for.</p>
      </header>

      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default NotFound;
