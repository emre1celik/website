import { NotFoundWrapper, NotFoundContent } from "./NotFoundStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

function NotFound({ user }) {
  return (
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
  );
}

export default NotFound;
