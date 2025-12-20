import { NotFoundWrapper, NotFoundContent } from "./NotFoundStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "../../context/TranslationContext";

function NotFound({ user, currentTheme, onThemeChange }) {
  const { translate } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Myra MuOnline - Page Not Found | Season 19 Episode 2-3</title>
        <meta
          name="description"
          content="Oops! The page you are looking for does not exist on Myra MuOnline Season 19 Episode 2-3. Return to the homepage and continue your MU Online adventure."
        />
        <meta
          name="keywords"
          content="mu online 404, myra mu not found, page missing mu online, myra season 19 ep2 not found"
        />
      </Helmet>

      <NotFoundWrapper>
        <Navigation user={user} />

        <NotFoundContent>
          <h1>{translate("notFound.header")}</h1>
          <p>{translate("notFound.message")}</p>
        </NotFoundContent>

        <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
