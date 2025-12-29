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
  LandingFeatures,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "./LandingStyles";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "../../context/TranslationContext";
import { faDragon, faTrophy, faGlobe } from "@fortawesome/free-solid-svg-icons";

function Landing({ user, currentTheme, onThemeChange }) {
  const { translate } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Myra MuOnline - Season 19 Episode 2-3 | MU Online Private Server |
          Download & Play
        </title>
      </Helmet>

      <LandingWrapper>
        <Navigation user={user} />

        <LandingHero>
          <h1>{translate("landing.heading")}</h1>
          <p>{translate("landing.subheading")}</p>

          <LandingButtons>
            <Link to="/downloads" style={{ textDecoration: "none" }}>
              <LandingButton>
                <ResponsiveIcon icon={faDownload} />
                {translate("landing.download")}
                <LandingButtonLabel>
                  {translate("landing.client")}
                </LandingButtonLabel>
              </LandingButton>
            </Link>

            <Link to="/register" style={{ textDecoration: "none" }}>
              <LandingButton>
                <ResponsiveIcon icon={faUserPlus} />
                {translate("landing.register")}
                <LandingButtonLabel>
                  {translate("landing.account")}
                </LandingButtonLabel>
              </LandingButton>
            </Link>
          </LandingButtons>
        </LandingHero>

        <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </LandingWrapper>
    </>
  );
}

export default Landing;
