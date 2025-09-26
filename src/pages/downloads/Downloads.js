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

function Downloads({ user }) {
  const mirrors = [
    {
      name: "Google Drive",
      url: "https://drive.google.com/file/d/1ednW_xQsh0xlBhg-5KpH1GcJ6JrEoCv5/view?usp=sharing",
      icon: faCloud,
    },
    {
      name: "MEGA.nz",
      url: "https://mega.nz/file/NL9EGaDR#PfheSNZ2GEyTp9Zwj_yW7yeKqF67tVPk85tnRQYQTTs",
      icon: faCloud,
    },
    {
      name: "MediaFire",
      url: "https://www.mediafire.com/file/umahy656t784skz/MyraMU.rar/file",
      icon: faFile,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Myra MuOnline - Downloads | Season 19 Episode 2-3 | MU Online Client</title>
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
            <h2>Download Mirrors</h2>
            <p>
              Choose a mirror to download the client. All links point to the same
              latest version.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}>
              {mirrors.map((mirror, idx) => (
                <li key={idx} style={{ margin: '1rem 0' }}>
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
              ⚠️ Note: You may need to exclude <strong>main.exe</strong> from your
              firewall or turn it off temporarily for the client to connect.
            </DownloadsNote>
          </DownloadsBox>
        </DownloadsHero>

        <Footer>
          <p>© 2025 MyraMU. All rights reserved.</p>
        </Footer>
      </DownloadsWrapper>
    </>
  );
}

export default Downloads;
