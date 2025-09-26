import Navigation from "../../components/navigation/Navigation";
import { faDownload, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  LandingWrapper,
  LandingHero,
  LandingButtons,
  LandingButton,
  ResponsiveIcon,
} from "./LandingStyles";
import Footer from "../../components/footer/Footer";

function Landing({ user }) {
  return (
    <LandingWrapper>
      <Navigation user={user} />

      <LandingHero>
        <h1>Welcome to MyraMU!</h1>
        <p>Experience the ultimate MU online adventure.</p>

        <LandingButtons>
          <Link to="/downloads"
            style={{ textDecoration: "none" }}
          >
            <LandingButton className="download">
              <ResponsiveIcon icon={faDownload} />
              Download Client
            </LandingButton>
          </Link>
          <Link to="/register"
            style={{ textDecoration: "none" }}
          >
            <LandingButton className="register">
              <ResponsiveIcon icon={faUserPlus} />
              Register Account
            </LandingButton>
          </Link>
        </LandingButtons>
      </LandingHero>

      <Footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </Footer>
    </LandingWrapper>
  );
}

export default Landing;
