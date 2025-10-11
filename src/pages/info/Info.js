import { Helmet } from "react-helmet";
import { InfoWrapper } from "./InfoStyles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

function Info({ user }) {
  return (
    <>
      <Helmet>
        <title>
          Myra MuOnline - Guides | Season 19 Episode 2-3 | MU Online Client
        </title>
        <meta
          name="description"
          content="Download the Myra MuOnline Season 19 Episode 2-3 client now! Join the fastest and most stable MU Online private server and start playing instantly."
        />
        <meta
          name="keywords"
          content="mu online download, myra mu client, mu private server download, season 19 ep2 client, myra mu download"
        />
      </Helmet>
      <InfoWrapper>
        <Navigation user={user} />

        <Footer />
      </InfoWrapper>
    </>
  )
}

export default Info;