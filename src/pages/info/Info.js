import { useState } from "react";
import { Helmet } from "react-helmet";
import { InfoBox, InfoHero, InfoWrapper } from "./InfoStyles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCog,
  faScroll,
  faShieldAlt,
  faCoins,
  faHandsHelping,
  faDragon,
  faStar,
  faGlassWhiskey,
  faBolt,
  faCrown,
  faGem,
  faGift,
  faTrophy,
  faClock,
  faTerminal,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../../context/TranslationContext";
import TranslatedHTML from "../../components/language/TranslatedHTML";

function Info({ user }) {
  const { translate } = useTranslation();

  const sections = [
    {
      title: translate("guide.serverInfo.title"),
      icon: faCog,
      content: (
        <>
          <p>{translate("guide.serverInfo.intro")}</p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FontAwesomeIcon
                icon={faBolt}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.expRate")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.masterExp")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCrown}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.majesticExp")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGem}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.excellentDrop")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGift}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.resetReward")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faRedo}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.grandReset")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.grandResetReward")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.eventTimers")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDragon}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.bossRespawns")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTerminal}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.commands")}
            </li>
            <br />
            <li>/addstr {translate("guide.serverInfo.list.amount")}</li>
            <li>/addagi {translate("guide.serverInfo.list.amount")}</li>
            <li>/addene {translate("guide.serverInfo.list.amount")}</li>
            <li>/addvit {translate("guide.serverInfo.list.amount")}</li>
            <li>/addcmd {translate("guide.serverInfo.list.amount")}</li>
            <li>/reset</li>
            <li>/offstore</li>
            <li>/offattack</li>
            <li>/clearinventory</li>
          </ul>
          <p>{translate("guide.serverInfo.outro")}</p>
        </>
      ),
    },
    {
      title: translate("guide.gear.title"),
      icon: faShieldAlt,
      content: (
        <>
          <p>{translate("guide.gear.intro")}</p>
          <ul style={{ listStyleType: "none" }}>
            <li>{translate("guide.gear.list.hunt")}</li>
            <br />
            <li>{translate("guide.gear.list.seedCapsules")}</li>
            <br />
            <li>
              {translate("guide.gear.list.bloodangel")}
              <br />
              <br />
              <ul>
                <li>Bloodangel</li>
                <li>Darkangel</li>
                <li>Holyangel</li>
                <li>Awakening</li>
                <li>Soul</li>
                <li>Blue Eye</li>
                <li>Silver Heart</li>
                <li>Manticore</li>
                <li>Brilliant</li>
                <li>Apocalypse</li>
                <li>Lightning</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },

    {
      title: translate("questsEvo.title"),
      icon: faScroll,
      content: (
        <>
          <p>{translate("questsEvo.intro")}</p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>{translate("questsEvo.secondClass.title")}</strong>:{" "}
              {translate("questsEvo.secondClass.level")}
              <br />
              <br />
              <ul style={{ listStyleType: "none" }}>
                <li>{translate("questsEvo.secondClass.items.darkKnight")}</li>
                <br />
                <li>{translate("questsEvo.secondClass.items.darkWizard")}</li>
                <br />
                <li>{translate("questsEvo.secondClass.items.elf")}</li>
              </ul>
              <br />
            </li>

            <hr style={{ borderColor: "#4caf50" }} />
            <br />

            <li>
              <strong>{translate("questsEvo.thirdClass.title")}</strong>:{" "}
              {translate("questsEvo.thirdClass.levelReq")}
              <br />
              <br />
              <ol style={{ listStyleType: "none" }}>
                <li>{translate("questsEvo.thirdClass.steps.step1")}</li>
                <br />
                <li>{translate("questsEvo.thirdClass.steps.step2")}</li>
                <br />
                <li>{translate("questsEvo.thirdClass.steps.step3")}</li>
              </ol>
            </li>

            <hr style={{ borderColor: "#4caf50" }} />
            <br />

            <li>
              <strong>{translate("questsEvo.fourthClass.title")}</strong>:{" "}
              {translate("questsEvo.fourthClass.levelReq")}
              <br />
              <br />
              <ol style={{ listStyleType: "none" }}>
                <li>{translate("questsEvo.fourthClass.stages.stage1")}</li>
                <br />
                <li>{translate("questsEvo.fourthClass.stages.stage2")}</li>
                <br />
                <li>{translate("questsEvo.fourthClass.stages.stage3")}</li>
              </ol>
              <br />
              <strong>{translate("questsEvo.fourthClass.rewards")}</strong>
            </li>

            <hr style={{ borderColor: "#4caf50" }} />
            <br />

            <li>
              <strong>{translate("questsEvo.fifthClass.title")}</strong>:{" "}
              {translate("questsEvo.fifthClass.levelReq")}
              <br />
              <br />
              <ol style={{ listStyleType: "none" }}>
                <li>{translate("questsEvo.fifthClass.waves.wave1")}</li>
                <br />
                <li>{translate("questsEvo.fifthClass.waves.wave2")}</li>
                <br />
                <li>{translate("questsEvo.fifthClass.waves.wave3")}</li>
                <br />
                <li>{translate("questsEvo.fifthClass.waves.wave4")}</li>
              </ol>
              <br />
              {translate("questsEvo.fifthClass.rewards")}
            </li>
          </ul>
        </>
      ),
    },
    {
      title: translate("ruud.title"),
      icon: faCoins,
      content: (
        <>
          <p>{translate("ruud.intro")}</p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <TranslatedHTML entity="ruud.list.bloodCastle" />
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <TranslatedHTML entity="ruud.list.goldenInvasions" />
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <TranslatedHTML entity="ruud.list.majesticMaps" />
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <TranslatedHTML entity="ruud.list.castleSiege" />
            </li>
            <br />
            <li>
              <FontAwesomeIcon
                icon={faHandsHelping}
                style={{ marginRight: "6px" }}
              />
              <TranslatedHTML entity="ruud.list.ruudNPC" />
            </li>
          </ul>
          <p className="footer-note">
            <FontAwesomeIcon icon={faStar} style={{ marginRight: "6px" }} />
            <TranslatedHTML entity="ruud.tip" />
          </p>
        </>
      ),
    },
    {
      title: translate("chaosCombination.title"),
      icon: faGlassWhiskey,
      content: (
        <>
          <p>
            <TranslatedHTML entity="chaosCombination.intro" />
          </p>

          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>{translate("chaosCombination.upgradeRates")}</strong>
              <ul style={{ listStyleType: "none" }}>
                <li>+1 ~ +6 → 100%</li>
                <li>+7 → 100%</li>
                <li>+8 → 100%</li>
                <li>+9 → 100%</li>
                <li>+10 → 100%</li>
                <li>+11 → 100%</li>
                <li>+12 → 100%</li>
                <li>+13 → 100%</li>
                <li>+14 → 100%</li>
                <li>+15 → 100%</li>
              </ul>
            </li>
            <br />
            <li>
              <TranslatedHTML entity="chaosCombination.wings1_description" />
            </li>
            <br />
            <li>
              <TranslatedHTML entity="chaosCombination.wings2_description" />
            </li>
            <br />
            <li>
              <TranslatedHTML entity="chaosCombination.wings3_description" />
            </li>
            <br />
            <li>
              <TranslatedHTML entity="chaosCombination.wings4_description" />
            </li>
            <br />
            <li>
              <TranslatedHTML entity="chaosCombination.tips" />
            </li>
          </ul>

          <TranslatedHTML entity="chaosCombination.outro" />
        </>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => setCurrentIndex((i) => (i + 1) % sections.length);
  const handlePrev = () =>
    setCurrentIndex((i) => (i === 0 ? sections.length - 1 : i - 1));

  const current = sections[currentIndex];

  return (
    <>
      <Helmet>
        <title>
          Myra MuOnline - Guides | Season 19 Episode 2-3 | MU Online Client
        </title>
      </Helmet>
      <InfoWrapper>
        <Navigation user={user} />
        <InfoHero>
          <InfoBox className="custom-scroll-area">
            <h2 style={{ textAlign: "center" }}>
              {translate("navigation.info")}
            </h2>
            <p>{translate("guide.intro")}</p>

            {/* Arrow Navigation and Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // ← spreads arrows to far ends
                width: "100%",
              }}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={handlePrev}
                style={{
                  cursor: "pointer",
                  color: "#4caf50",
                  fontSize: "1.5rem",
                }}
              />
              <h3 style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={current.icon}
                  style={{ marginRight: "8px", color: "#4caf50" }}
                />
                {current.title}
              </h3>
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={handleNext}
                style={{
                  cursor: "pointer",
                  color: "#4caf50",
                  fontSize: "1.5rem",
                }}
              />
            </div>

            <hr style={{ width: "100%", borderColor: "#4caf50" }} />

            <div
              style={{ marginTop: "1rem", transition: "all 0.3s ease-in-out" }}
            >
              {current.content}
            </div>
          </InfoBox>
        </InfoHero>
        <Footer />
      </InfoWrapper>
    </>
  );
}

export default Info;
