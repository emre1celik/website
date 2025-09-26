import "./App.css";
import Navigation from "./components/navigation/Navigation";

function NotFound({ user }) {
  return (
    <div className="App">
      <Navigation user={user} />

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
