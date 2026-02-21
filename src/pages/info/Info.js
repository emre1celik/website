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
  const [openIndex, setOpenIndex] = useState(0);
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
            <li>/addstr {translate("guide.serverInfo.list.amount")} <span style={{ color: "grey" }}>- Adds points to strength</span></li>
            <li>/addagi {translate("guide.serverInfo.list.amount")} <span style={{ color: "grey" }}>- Adds points to agility</span></li>
            <li>/addene {translate("guide.serverInfo.list.amount")} <span style={{ color: "grey" }}>- Adds points to energy</span></li>
            <li>/addvit {translate("guide.serverInfo.list.amount")} <span style={{ color: "grey" }}>- Adds points to vitality</span></li>
            <li>/addcmd {translate("guide.serverInfo.list.amount")} <span style={{ color: "grey" }}>- Adds points to command</span></li>
            <li>/reset <span style={{ color: "grey" }}>- Required level 400, you will stay in spot</span></li>
            <li>/reset auto <span style={{ color: "grey" }}>- Automatically reset at level 400, use again to disable</span></li>
            <li>/change <span style={{ color: "grey" }}>- Automatically evolve to your next class quest evolution</span></li>
            <li>/attack <span style={{ color: "grey" }}>- This will put you in off attack modus, you can close client</span></li>
            <li>/store ruud <span style={{ color: "grey" }}>- Open personal store then type this to offstore sell ruud (Zen will be Ruud)</span></li>
            <li>/store wcc <span style={{ color: "grey" }}>- Open personal store then type this to offstore sell WCoin (Zen will be WCoin)</span></li>
            <li>/clearinv <span style={{ color: "grey" }}>- Clears your entire inventory</span></li>
            <li>/clearextinv <span style={{ color: "grey" }}>- Clears all four of your extended inventory</span></li>
            <li>/clearinvmuun <span style={{ color: "grey" }}>- Clears your entire muun inventory</span></li>
            <li>/cleareventinv <span style={{ color: "grey" }}>- Clears your entire event inventory</span></li>
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
                <li>Temple Guard</li>
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
          <p>{translate("guide.questsEvo.description")}</p>
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
                      {res.source === "map"
                        ? translate("dropSearch.source.map")
                        : translate("dropSearch.source.bag")}{" "}
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

                            {res.source === "map" && res.minLevel > 0 && (
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
                <li>+1 ~ +15 → 100%</li>
              </ul>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>{translate("chaosCombination.harmonyRates")}</strong>
              <ul style={{ listStyleType: "none" }}>
                <li>Jewel of Bless Success Rate → 100%</li>
                <li>Jewel of Soul Success Rate → 100%</li>
                <li>Jewel of Life Success Rate → 100%</li>
                <li>Harmony Success Rate → 50%</li>
                <li>Gemstone Success Rate → 50%</li>
                <li>Artifact Spider Success Rate → 80%</li>
              </ul>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>{translate("chaosCombination.elementalRates")}</strong>
              <ul style={{ listStyleType: "none" }}>
                <li>Pentagram Mithril Rate → 100%</li>
                <li>Pentagram Elixir Rate → 100%</li>
                <li>Pentagram Jewel Rate → 100%</li>
              </ul>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>{translate("chaosCombination.wingRates")}</strong>
              <ul style={{ listStyleType: "none" }}>
                <li>Wing Relics (All level) → 100%</li>
                <li>Wing Core → 100%</li>
              </ul>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>{translate("chaosCombination.abilityRates")}</strong>
              <ul style={{ listStyleType: "none" }}>
                <li>Ability card option → 100%</li>
                <li>Elite ability card → 100%</li>
                <li>Skill ability card → 100%</li>
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
