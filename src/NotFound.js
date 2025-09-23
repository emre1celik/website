import "./App.css";
import Navigation from "./Navigation";

function NotFound() {
  return (
    <div className="App">
      <Navigation />

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
