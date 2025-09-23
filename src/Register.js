import "./App.css";
import Navigation from "./Navigation";

function Register() {
  return (
    <div className="App">
      <Navigation />

      <header className="hero">
        <div className="register-box">
          <h2>Create an Account</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </header>

      <footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Register;
