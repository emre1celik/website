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
import { useTranslation } from "../../context/TranslationContext";
import {
  LandingFeatures,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "./LandingStyles";
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
          <h1>{translate("landing.heading")}</h1>
          <p>{translate("landing.subheading")}</p>

          <LandingButtons>
            <Link to="/downloads" style={{ textDecoration: "none" }}>
              <LandingButton className="download">
                <ResponsiveIcon icon={faDownload} />
                {translate("landing.download")}{" "}
                <LandingButtonLabel>
                  {translate("landing.client")}
                </LandingButtonLabel>
              </LandingButton>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <LandingButton className="register">
                <ResponsiveIcon icon={faUserPlus} />
                {translate("landing.register")}{" "}
                <LandingButtonLabel>
                  {translate("landing.account")}
                </LandingButtonLabel>
              </LandingButton>
            </Link>
          </LandingButtons>
          <LandingFeatures>
            <FeatureCard>
              <FeatureIcon icon={faDragon} />
              <FeatureTitle>{translate("landing.feature1Title")}</FeatureTitle>
              <FeatureText>{translate("landing.feature1Desc")}</FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon icon={faTrophy} />
              <FeatureTitle>{translate("landing.feature2Title")}</FeatureTitle>
              <FeatureText>{translate("landing.feature2Desc")}</FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon icon={faGlobe} />
              <FeatureTitle>{translate("landing.feature3Title")}</FeatureTitle>
              <FeatureText>{translate("landing.feature3Desc")}</FeatureText>
            </FeatureCard>
          </LandingFeatures>
        </LandingHero>
        <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </LandingWrapper>
    </>
  );
}

export default Landing;
