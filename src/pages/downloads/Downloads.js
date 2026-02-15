import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faDownload, faFile } from "@fortawesome/free-solid-svg-icons";
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
import fontissue from "../../assets/images/fontissue.png";
import { SystemRequirements } from "./DownloadsStyles";

function Downloads({ user, currentTheme, onThemeChange }) {
  const { translate } = useTranslation();

  const fullMirrors = [
    {
      name: "Google Drive (1,84 GB)",
      url: "https://drive.google.com/file/d/1Ie__rMBcVVbneeFrTyxZdafM-8oewdl7/view?usp=drive_link",
      icon: faCloud,
    },
    {
      name: "MEGA.nz (1,84 GB)",
      url: "https://mega.nz/file/BHsCTSoK#41EFK7k3SkZFYSJA6ejvBNcrfKNuEdbKcdYoFPvCOtg",
      icon: faCloud,
    },
    {
      name: "MediaFire (1,84 GB)",
      url: "https://www.mediafire.com/file/0px69c0vfn6dhdj/Myra+MuOnline+-+Season+20+Episode+2+&+3.rar/file",
      icon: faFile,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Myra MuOnline - Downloads | Season 20 Episode 2-3 | MU Online Client
        </title>
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
              {fullMirrors.map((mirror, idx) => (
                <li key={idx} style={{ margin: "0.3rem 0" }}>
                  <DownloadsMirrorButton
                    href={mirror.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <span className="left">
                        <FontAwesomeIcon icon={mirror.icon} />
                        {mirror.name}
                      </span>
                      <span className="right">
                        <FontAwesomeIcon
                          icon={faDownload}
                          style={{ color: currentTheme.primary }}
                        />
                      </span>
                    </button>
                  </DownloadsMirrorButton>
                </li>
              ))}
            </ul>
            <SystemRequirements>
              <h3>{translate("downloads.requirements.title")}</h3>

              <table>
                <thead>
                  <tr>
                    <th>{translate("downloads.requirements.table.component")}</th>
                    <th>{translate("downloads.requirements.table.minimum")}</th>
                    <th>{translate("downloads.requirements.table.recommended")}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{translate("downloads.requirements.table.processor")}</td>
                    <td>{translate("downloads.requirements.table.processor_min")}</td>
                    <td className="recommended">
                      {translate("downloads.requirements.table.processor_rec")}
                    </td>
                  </tr>

                  <tr>
                    <td>{translate("downloads.requirements.table.memory")}</td>
                    <td>{translate("downloads.requirements.table.memory_min")}</td>
                    <td className="recommended">
                      {translate("downloads.requirements.table.memory_rec")}
                    </td>
                  </tr>

                  <tr>
                    <td>{translate("downloads.requirements.table.os")}</td>
                    <td>{translate("downloads.requirements.table.os_min")}</td>
                    <td className="recommended">
                      {translate("downloads.requirements.table.os_rec")}
                    </td>
                  </tr>

                  <tr>
                    <td>{translate("downloads.requirements.table.gpu")}</td>
                    <td>{translate("downloads.requirements.table.gpu_min")}</td>
                    <td className="recommended">
                      {translate("downloads.requirements.table.gpu_rec")}
                    </td>
                  </tr>

                  <tr>
                    <td>{translate("downloads.requirements.table.connection")}</td>
                    <td>{translate("downloads.requirements.table.connection_min")}</td>
                    <td className="recommended">
                      {translate("downloads.requirements.table.connection_rec")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </SystemRequirements>

            <DownloadsNote>
              <TranslatedHTML entity="downloads.note1" />
            </DownloadsNote>
            <img
              src={fontissue}
              alt="Myra MU Online Screenshot"
              style={{ width: "100%", height: "auto" }}
            />
            <DownloadsNote>
              <TranslatedHTML entity="downloads.note3_desc" />
            </DownloadsNote>
            <DownloadsNote>
              <TranslatedHTML entity="downloads.note2_desc" />
            </DownloadsNote>
          </DownloadsBox>
        </DownloadsHero>
        <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </DownloadsWrapper>
    </>
  );
}

export default Downloads;
