import Navigation from "../../components/navigation/Navigation";
import { faDownload, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  LandingWrapper,
  LandingHero,
  LandingButtons,
  LandingButton,
  ResponsiveIcon,
  LandingButtonLabel,
} from "./LandingStyles";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

function Landing({ user }) {
  return (
    <>
      <Helmet>
        <title>Myra MuOnline - Season 19 Episode 2-3 | MU Online Private Server | Download & Play</title>
        <meta
          name="description"
          content="Join Myra MuOnline Season 19 Episode 2-3! Play the ultimate MU Online private server. Download, register, and start your adventure today. Fast servers, fun events, and active community."
        />
        <meta
          name="keywords"
          content="mu online, muonline, mu, myra, myra muonline, myra season 19, myra season 19 episode 2, myra season 19 episode 3, myra private server, download mu online, play mu online"
        />
      </Helmet>
      
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
                Download <LandingButtonLabel>Client</LandingButtonLabel>
              </LandingButton>
            </Link>
            <Link to="/register"
              style={{ textDecoration: "none" }}
            >
              <LandingButton className="register">
                <ResponsiveIcon icon={faUserPlus} />
                Register <LandingButtonLabel>Account</LandingButtonLabel>
              </LandingButton>
            </Link>
          </LandingButtons>
        </LandingHero>

        <Footer>
          <p>© 2025 MyraMU. All rights reserved.</p>
        </Footer>
      </LandingWrapper>
    </>
  );
}

export default Landing;
