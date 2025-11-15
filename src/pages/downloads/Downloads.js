import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  DownloadsWrapper,
  DownloadsHero,
  DownloadsBox,
  DownloadsMirrorButton,
  DownloadsNote,
} from "./DownloadsStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "../../context/TranslationContext";
import TranslatedHTML from "../../components/language/TranslatedHTML";

function Downloads({ user }) {
  const { translate } = useTranslation();

  const mirrors = [
    {
      name: "Google Drive (1,7 GB Full)",
      url: "https://drive.google.com/file/d/1COtXeSKISrPAJGtONO7rSWyR__o0h084/view?usp=sharing",
      icon: faCloud,
    },
    {
      name: "Google Drive (1.2 GB No Sound & Music)",
      url: "https://drive.google.com/file/d/16tXi4TdifJt9KzsE-LnY7oTMz2EHK1J6/view?usp=sharing",
      icon: faCloud,
    },
    {
      name: "MEGA.nz (1,7 GB Full)",
      url: "https://mega.nz/file/BHsCTSoK#41EFK7k3SkZFYSJA6ejvBNcrfKNuEdbKcdYoFPvCOtg",
      icon: faCloud,
    },
    {
      name: "MEGA.nz (1.2 GB No Sound & Music)",
      url: "https://mega.nz/file/ZL9GVKCB#SoTIHBsyySV2BhiB-XeK26v5Wa0B3y0Ks2p1z4b29mI",
      icon: faCloud,
    },
    {
      name: "MediaFire (1,7 GB Full)",
      url: "https://www.mediafire.com/file/7582addza0w9z43/Myra+MU+Online.rar/file",
      icon: faFile,
    },
    {
      name: "MediaFire (1.2 GB No Sound & Music)",
      url: "https://www.mediafire.com/file/w5uodq26nxrkcxq/Myra+MU+Online+(No+Sound).rar/file",
      icon: faFile,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Myra MuOnline - Downloads | Season 19 Episode 2-3 | MU Online Client
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

      <DownloadsWrapper>
        <Navigation user={user} />

        <DownloadsHero>
          <DownloadsBox>
            <h2>{translate("downloads.title")}</h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "100%",
              }}
            >
              {mirrors.map((mirror, idx) => (
                <li key={idx} style={{ margin: "1rem 0" }}>
                  <DownloadsMirrorButton
                    href={mirror.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <FontAwesomeIcon icon={mirror.icon} />
                      {mirror.name}
                    </button>
                  </DownloadsMirrorButton>
                </li>
              ))}
            </ul>
            <DownloadsNote>
              <TranslatedHTML entity="downloads.note1" />
            </DownloadsNote>
            <DownloadsNote>
              <TranslatedHTML entity="downloads.note3_desc" />
            </DownloadsNote>
            <DownloadsNote>
              <TranslatedHTML entity="downloads.note2_desc" />
            </DownloadsNote>
          </DownloadsBox>
        </DownloadsHero>

        <Footer />
      </DownloadsWrapper>
    </>
  );
}

export default Downloads;
