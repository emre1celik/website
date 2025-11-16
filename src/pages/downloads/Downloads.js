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

  const fullMirrors = [
    {
      name: "Google Drive (1,7 GB)",
      url: "https://drive.google.com/file/d/1COtXeSKISrPAJGtONO7rSWyR__o0h084/view?usp=sharing",
      icon: faCloud,
    },
    {
      name: "MEGA.nz (1,7 GB)",
      url: "https://mega.nz/file/BHsCTSoK#41EFK7k3SkZFYSJA6ejvBNcrfKNuEdbKcdYoFPvCOtg",
      icon: faCloud,
    },
    {
      name: "MediaFire (1,7 GB)",
      url: "https://www.mediafire.com/file/7582addza0w9z43/Myra+MU+Online.rar/file",
      icon: faFile,
    },
  ];

  const noSoundMirrors = [
    {
      name: "Google Drive (1.2 GB)",
      url: "https://drive.google.com/file/d/16tXi4TdifJt9KzsE-LnY7oTMz2EHK1J6/view?usp=sharing",
      icon: faCloud,
    },
    {
      name: "MEGA.nz (1.2 GB)",
      url: "https://mega.nz/file/ZL9GVKCB#SoTIHBsyySV2BhiB-XeK26v5Wa0B3y0Ks2p1z4b29mI",
      icon: faCloud,
    },
    {
      name: "MediaFire (1.2 GB)",
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
      </Helmet>

      <DownloadsWrapper>
        <Navigation user={user} />

        <DownloadsHero>
          <DownloadsBox>
            <h2>{translate("downloads.title")}</h2>

            <h3>{translate("downloads.full_client")}</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "100%",
              }}
            >
              {fullMirrors.map((mirror, idx) => (
                <li key={idx} style={{ margin: "1rem 0" }}>
                  <DownloadsMirrorButton
                    href={mirror.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <FontAwesomeIcon icon={mirror.icon} /> {mirror.name}
                    </button>
                  </DownloadsMirrorButton>
                </li>
              ))}
            </ul>

            <h3>{translate("downloads.no_sound_client")}</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                width: "100%",
              }}
            >
              {noSoundMirrors.map((mirror, idx) => (
                <li key={idx} style={{ margin: "1rem 0" }}>
                  <DownloadsMirrorButton
                    href={mirror.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <FontAwesomeIcon icon={mirror.icon} /> {mirror.name}
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
