import React, { useState } from "react";

import { Helmet } from "react-helmet";
import {
  InfoBox,
  InfoHero,
  InfoWrapper,
  SectionButton,
  SectionContent,
  SearchInput,
  ResultBox,
  ResultItem,
  Pagination,
  PageButton,
  PageInfo,
} from "./InfoStyles";

import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  faSearch,
  faBagShopping,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../../context/TranslationContext";
import TranslatedHTML from "../../components/language/TranslatedHTML";
import monsterDrops from "../../config/map_drops";
import bagDrops from "../../config/itembags_drops";
import { faMapMarkedAlt, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

function Info({ user, currentTheme, onThemeChange }) {
  const drops = [
    ...monsterDrops.map((d) => ({ ...d, source: "map" })),
    ...bagDrops.map((d) => ({ ...d, source: "bag" })),
  ];

  const { translate } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [openResult, setOpenResult] = useState(null);
  const toggleResult = (index) => {
    setOpenResult(openResult === index ? null : index);
  };
  const [page, setPage] = useState(1);
  const RESULTS_PER_PAGE = 5;

  const handleSearch = (value) => {
    setQuery(value);
    setPage(1);

    if (!value) {
      setResults([]);
      return;
    }

    const q = value.toLowerCase();
    const filtered = drops.filter((d) => d.item.toLowerCase().includes(q));

    setResults(filtered);
  };

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const rateToPercent = (rate) => {
    if (!rate) return "0%";
    const percent = rate / 100;
    const capped = Math.min(percent, 100);
    return `${capped.toFixed(capped % 1 === 0 ? 0 : 2)}%`;
  };

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);
  const pagedResults = results.slice(
    (page - 1) * RESULTS_PER_PAGE,
    page * RESULTS_PER_PAGE
  );

  const sections = [
    {
      title: translate("guide.serverInfo.title"),
      icon: faCog,
      content: (
        <>
          {/* existing content unchanged */}
          <p>{translate("guide.serverInfo.intro")}</p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FontAwesomeIcon
                icon={faBolt}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.expRate")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.masterExp")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCrown}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.majesticExp")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGem}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.excellentDrop")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGift}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.resetReward")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faRedo}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.grandReset")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.grandResetReward")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.eventTimers")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDragon}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.bossRespawns")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTerminal}
                style={{ color: currentTheme.primary, marginRight: "8px" }}
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
            <li>/clearextinventory</li>
            <li>/cleargremorycase</li>
            <li>/cleareventinventory</li>
            <li>/clearemuuninventory</li>
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
          {/* unchanged */}
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
          {/* unchanged */}
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

            <hr style={{ borderColor: currentTheme.primary }} />
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

            <hr style={{ borderColor: currentTheme.primary }} />
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

            <hr style={{ borderColor: currentTheme.primary }} />
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
          {/* unchanged */}
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
    // 🔍 New Drop Search section
    {
      title: translate("dropSearch.title"),
      icon: faSearch,
      content: (
        <>
          <p>{translate("dropSearch.intro")}</p>
          <SearchInput
            type="text"
            placeholder={translate("dropSearch.placeholder")}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {results.length > 0 && (
            <ResultBox>
              {pagedResults.map((res, i) => {
                const realIndex = (page - 1) * RESULTS_PER_PAGE + i;
                const isOpen = openResult === realIndex;

                return (
                  <ResultItem key={realIndex}>
                    {/* Clickable header */}
                    <div
                      onClick={() => toggleResult(realIndex)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                        color: currentTheme.primary,
                      }}
                    >
                      <FontAwesomeIcon
                        icon={res.source === "map" ? faMapMarkedAlt : faBoxOpen}
                        style={{ marginRight: "6px" }}
                      />

                      {res.item}
                      <span style={{ marginLeft: "auto", opacity: 0.7 }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>

                    {/* Details only when open */}
                    {isOpen && (
                      <ul
                        style={{ listStyleType: "none", marginTop: "0.5rem" }}
                      >
                        {res.maps.map((map, idx) => (
                          <React.Fragment key={idx}>
                            <li>
                              <FontAwesomeIcon
                                icon={faMapMarkedAlt}
                                style={{
                                  marginRight: "6px",
                                  color: currentTheme.primary,
                                }}
                              />
                              {map.name}
                            </li>

                            <li>
                              <FontAwesomeIcon
                                icon={faBagShopping}
                                style={{
                                  marginRight: "4px",
                                  color: currentTheme.primary,
                                }}
                              />
                              {rateToPercent(map.rate)}{" "}
                              {translate("dropSearch.droprate")}
                            </li>

                            {res.minLevel > 0 && (
                              <li>
                                <span
                                  style={{
                                    color: "#aaa",
                                    fontWeight: "normal",
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faSkull}
                                    style={{
                                      marginRight: "4px",
                                      color: currentTheme.primary,
                                    }}
                                  />
                                  {translate("dropSearch.minLevel")}:{" "}
                                  {res.minLevel}
                                </span>
                              </li>
                            )}

                            {idx < res.maps.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </ul>
                    )}
                  </ResultItem>
                );
              })}
            </ResultBox>
          )}
          {results.length > RESULTS_PER_PAGE && (
            <Pagination>
              <PageButton
                disabled={page === 1}
                onClick={() => {
                  setPage((p) => Math.max(1, p - 1));
                  setOpenResult(null);
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />{" "}
                {translate("dropSearch.prev")}
              </PageButton>

              <PageInfo>
                {translate("dropSearch.page")} {page}{" "}
                {translate("dropSearch.of")} {totalPages}
              </PageInfo>

              <PageButton
                disabled={page === totalPages}
                onClick={() => {
                  setPage((p) => Math.min(totalPages, p + 1));
                  setOpenResult(null);
                }}
              >
                {translate("dropSearch.next")}{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </PageButton>
            </Pagination>
          )}

          {query && (
            <p style={{ marginBottom: "0.5rem", color: "#aaa" }}>
              {translate("dropSearch.found")} <strong>{results.length}</strong>{" "}
              {translate("dropSearch.results")}
            </p>
          )}
        </>
      ),
    },
    {
      title: translate("chaosCombination.title"),
      icon: faGlassWhiskey,
      content: (
        <>
          {/* unchanged */}
          <TranslatedHTML entity="chaosCombination.intro" />
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
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Myra MuOnline - Guides</title>
      </Helmet>
      <InfoWrapper>
        <Navigation user={user} />
        <InfoHero>
          <InfoBox className="custom-scroll-area">
            <h2 style={{ textAlign: "center" }}>
              {translate("navigation.info")}
            </h2>
            <p>{translate("guide.intro")}</p>

            {sections.map((section, index) => (
              <div key={index}>
                <SectionButton
                  onClick={() => toggleSection(index)}
                  style={{ borderColor: currentTheme.primary }}
                >
                  <span>
                    <FontAwesomeIcon
                      icon={section.icon}
                      style={{
                        marginRight: "8px",
                        color: currentTheme.primary,
                      }}
                    />
                    {section.title}
                  </span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </SectionButton>

                {openIndex === index && (
                  <SectionContent>{section.content}</SectionContent>
                )}
              </div>
            ))}
          </InfoBox>
        </InfoHero>

        <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </InfoWrapper>
    </>
  );
}

export default Info;
