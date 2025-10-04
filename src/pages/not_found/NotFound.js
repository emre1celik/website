import { NotFoundWrapper, NotFoundContent } from "./NotFoundStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

function NotFound({ user }) {
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
          <h1>404 - Page Not Found</h1>
          <p>Oops! We can’t find the page you’re looking for.</p>
        </NotFoundContent>

        <Footer>
          <p>© 2025 MyraMU. All rights reserved.</p>
        </Footer>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
