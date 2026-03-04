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
  BossGrid,
  BossCard,
  BossHeader,
  BossTitle,
  BossSubtitle,
  BossText,
  ClassIconBackground,
} from "../highscores/HighscoresStyles";
import CoreMagriffyIcon from "../../assets/images/bosses/core_magriffy.png";
import LordFereaIcon from "../../assets/images/bosses/lord_of_ferea.png";
import LordSilvesterIcon from "../../assets/images/bosses/lord_silvester.png";
import NightmareIcon from "../../assets/images/bosses/nightmare.png";
import SelupanIcon from "../../assets/images/bosses/selupan.png";
import MedusaIcon from "../../assets/images/bosses/medusa.png";
import KundunIcon from "../../assets/images/bosses/illusion_of_kundun.png";
import GodOfDarknessIcon from "../../assets/images/bosses/god_of_darkness.png";
import NixIcon from "../../assets/images/bosses/nix.png";

import IceQueenIcon from "../../assets/images/monsters/ice_queen.png";
import RedDragonIcon from "../../assets/images/monsters/red_dragon.png";
import GoldDragonIcon from "../../assets/images/monsters/gold_dragon.png";
import GorgonIcon from "../../assets/images/monsters/gorgon.png";
import HydraIcon from "../../assets/images/monsters/hydra.png";
import ZaikanIcon from "../../assets/images/monsters/zaikan.png";
import PhoenixIcon from "../../assets/images/monsters/phoenix_darkness.png";
import HellmaineIcon from "../../assets/images/monsters/hellmaine.png";
import BloodCastleIcon from "../../assets/images/classes/event.png";
import DeathKingIcon from "../../assets/images/monsters/deathking.png";
import WhiteWizardIcon from "../../assets/images/monsters/whitewizard.png";
import BalrogIcon from "../../assets/images/monsters/balrog.png";
import HellraiserIcon from "../../assets/images/monsters/hellraiser.png";
import LunarIcon from "../../assets/images/monsters/lunar.png";
import MuunIcon from "../../assets/images/monsters/lunar.png";
import AzureDragonIcon from "../../assets/images/monsters/lunar.png";

import EliteAbyssIcon from "../../assets/images/monsters/eliteabyss.png";
import EliteScorchedIcon from "../../assets/images/monsters/elitescorched.png";
import EliteIcarusIcon from "../../assets/images/monsters/eliteicarus.png";
import EliteArenilIcon from "../../assets/images/monsters/elitearnil.png";
import EliteAidaIcon from "../../assets/images/monsters/eliteaida.png";
import EliteKethotumIcon from "../../assets/images/monsters/elitekethotum.png";
import EliteKanturuIcon from "../../assets/images/monsters/elitekanturu.png";
import EliteIgnisIcon from "../../assets/images/monsters/eliteignis.png";
import EliteTarkanIcon from "../../assets/images/monsters/elitetarkan.png";
import EliteTormentaIcon from "../../assets/images/monsters/elitetormenta.png";
import EliteKarutanIcon from "../../assets/images/monsters/elitekarutan.png";
import EliteKardamahalIcon from "../../assets/images/monsters/elitekardamahal.png";
import EliteSwampIcon from "../../assets/images/monsters/eliteswamp.png";

import {
  faCog,
  faScroll,
  faShieldAlt,
  faCoins,
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
  faDragon,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../../context/TranslationContext";
import TranslatedHTML from "../../components/language/TranslatedHTML";
import monsterDrops from "../../config/map_drops";
import bagDrops from "../../config/itembags_drops";
import { faMapMarkedAlt, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

function Info({ user, currentTheme, onThemeChange }) {
  const drops = [
    ...monsterDrops.map((d) => ({ ...d, source: "map" })),
    ...bagDrops.map((d) => ({ ...d, source: "bag" })),
  ]; const rewardSources = [

    // BOSSES
    {
      name: "God of Darkness",
      type: "boss",
      icon: GodOfDarknessIcon,
      location: "Swamp of Darkness",
      ruud: "25,000 - 30,000",
    },
    {
      name: "Nix",
      type: "boss",
      icon: NixIcon,
      location: "Nixies Lake",
      ruud: "20,000 - 25,000",
    },
    {
      name: "Lord of Ferea",
      type: "boss",
      icon: LordFereaIcon,
      location: "Ferea",
      ruud: "15,000 - 20,000",
    },
    {
      name: "Lord Silvester",
      type: "boss",
      icon: LordSilvesterIcon,
      location: "Uruk Mountain",
      ruud: "10,000 - 15,000",
    },
    {
      name: "Core Magriffy",
      type: "boss",
      icon: CoreMagriffyIcon,
      location: "Nars, Acheron",
      ruud: "10,000 - 15,000",
    },
    {
      name: "Medusa",
      type: "boss",
      icon: MedusaIcon,
      location: "Swamp of Peace",
      ruud: "10,000 - 15,000",
    },
    {
      name: "Selupan",
      type: "boss",
      icon: SelupanIcon,
      location: "Raklion",
      ruud: "10,000 - 15,000",
    },
    {
      name: "Nightmare",
      type: "boss",
      icon: NightmareIcon,
      location: "Kanturu Core",
      ruud: "10,000 - 15,000",
    },
    {
      name: "Kundun",
      type: "boss",
      icon: KundunIcon,
      location: "Kalima",
      ruud: "5,000",
    },
    // MINI BOSSES
    {
      name: "Hellmaine",
      type: "monster",
      icon: HellmaineIcon,
      location: "Aida",
      ruud: "4,000",
    },
    {
      name: "Phoenix of Darkness",
      type: "monster",
      icon: PhoenixIcon,
      location: "Icarus",
      ruud: "3,500",
    },
    {
      name: "Zaikan",
      type: "monster",
      icon: ZaikanIcon,
      location: "Tarkan",
      ruud: "3,000",
    },
    {
      name: "Hydra",
      type: "monster",
      icon: HydraIcon,
      location: "Atlans",
      ruud: "2,500",
    },
    {
      name: "Gorgon",
      type: "monster",
      icon: GorgonIcon,
      location: "Dungeon",
      ruud: "2,000",
    },
    {
      name: "Ice Queen",
      type: "monster",
      icon: IceQueenIcon,
      location: "Devias",
      ruud: "1,500",
    },

    // EVENTS
    {
      name: "Blood Castle",
      type: "event",
      icon: BloodCastleIcon,
      ruud: "~100,000 per event",
    },
    {
      name: "Devil Square",
      type: "event",
      icon: BloodCastleIcon,
      ruud: "~80,000 per event",
    },
    {
      name: "Chaos Castle",
      type: "event",
      icon: BloodCastleIcon,
      ruud: "~15,000 per event",
    },
    {
      name: "Elite Abyss",
      type: "elite",
      icon: EliteAbyssIcon,
      location: "Abyss of Atlans",
      ruud: "5,000",
    },
    {
      name: "Elite Scorched Canyon",
      type: "elite",
      icon: EliteScorchedIcon,
      location: "Scorched Canyon",
      ruud: "5,500",
    },
    {
      name: "Elite Crimson Icarus",
      type: "elite",
      icon: EliteIcarusIcon,
      location: "Crimson Icarus",
      ruud: "6,000",
    },
    {
      name: "Elite Temple of Arenil",
      type: "elite",
      icon: EliteArenilIcon,
      location: "Temple of Arenil",
      ruud: "6,500",
    },
    {
      name: "Elite Ashen Aida",
      type: "elite",
      icon: EliteAidaIcon,
      location: "Ashen Aida",
      ruud: "7,000",
    },
    {
      name: "Elite Burning Kethotum",
      type: "elite",
      icon: EliteKethotumIcon,
      location: "Burning Kethotum",
      ruud: "7,500",
    },
    {
      name: "Elite Kanturu Underground",
      type: "elite",
      icon: EliteKanturuIcon,
      location: "Kanturu Underground",
      ruud: "8,000",
    },
    {
      name: "Elite Ignis Volcano",
      type: "elite",
      icon: EliteIgnisIcon,
      location: "Ignis Volcano",
      ruud: "8,500",
    },
    {
      name: "Elite Bloody Tarkan",
      type: "elite",
      icon: EliteTarkanIcon,
      location: "Gore Tarkan",
      ruud: "9,000",
    },
    {
      name: "Elite Tormenta Island",
      type: "elite",
      icon: EliteTormentaIcon,
      location: "Tormenta Island",
      ruud: "9,500",
    },
    {
      name: "Elite Twisted Karutan",
      type: "elite",
      icon: EliteKarutanIcon,
      location: "Twisted Karutan",
      ruud: "10,000",
    },
    {
      name: "Elite Kardamahal Temple",
      type: "elite",
      icon: EliteKardamahalIcon,
      location: "Kardamahal Temple",
      ruud: "10,000",
    },
    {
      name: "Elite Swamp of Doom",
      type: "elite",
      icon: EliteSwampIcon,
      location: "Swamp of Doom",
      ruud: "10,000",
    },
    {
      name: "Maze of Dimensions",
      type: "event",
      icon: BloodCastleIcon,
      ruud: "20,000 per floor",
    },
    // INVASIONS
    {
      name: "Deathking Invasion",
      type: "invasion",
      icon: DeathKingIcon,
      ruud: "2,000 ~ 3,000 per kill",
    },
    {
      name: "Red Dragon Invasion",
      type: "invasion",
      icon: RedDragonIcon,
      ruud: "3,000 ~ 5,000 per kill",
    },
    {
      name: "Golden Invasion",
      type: "invasion",
      icon: GoldDragonIcon,
      ruud: "3,000 per kill",
    },
    {
      name: "White Wizard Invasion",
      type: "invasion",
      icon: WhiteWizardIcon,
      ruud: "3,500 per kill",
    },
    {
      name: "Website Rewards: Event",
      type: "invasion",
      icon: BloodCastleIcon,
      ruud: "907,000 total",
      wcoin: "1,500 total",
      goblin: "20,500 total",
    },
    {
      name: "Website Rewards: Reset",
      type: "invasion",
      icon: BloodCastleIcon,
      ruud: "1,144,000 total",
      wcoin: "2,035 total",
      goblin: "27,600 total",
    },
    {
      name: "Website Rewards: Grand Reset",
      type: "invasion",
      icon: BloodCastleIcon,
      wcoin: "1,000",
      goblin: "10,000",
    },
    {
      name: "Website Rewards: Monsters",
      type: "invasion",
      icon: BloodCastleIcon,
      ruud: "1,161,000 total",
      wcoin: "4,761 total",
      goblin: "48,350 total",
    },
    {
      name: "In-game playtime",
      type: "invasion",
      icon: BloodCastleIcon,
      goblin: "1 per 10 minutes",
    },
    {
      name: "Balrog Invasion",
      type: "invasion",
      icon: BalrogIcon,
      ruud: "5,000",
    },
    {
      name: "Lunar Invasion",
      type: "invasion",
      icon: LunarIcon,
      ruud: "500",
    },
    {
      name: "Hellraiser Invasion",
      type: "invasion",
      icon: HellraiserIcon,
      ruud: "5,000",
    },
    {
      name: "Azure Dragon Invasion",
      type: "invasion",
      icon: AzureDragonIcon,
      ruud: "500",
    },
    {
      name: "Muun Invasion",
      type: "invasion",
      icon: MuunIcon,
      ruud: "500",
    },
  ]; const [rewardSearch, setRewardSearch] = useState(""); const filteredRewards = rewardSources.filter(r =>
    r.name.toLowerCase().includes(rewardSearch.toLowerCase())
  );
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
            <li>
              /addstr {translate("guide.serverInfo.list.amount")}{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.addstr")}
              </span>
            </li>

            <li>
              /addagi {translate("guide.serverInfo.list.amount")}{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.addagi")}
              </span>
            </li>

            <li>
              /addene {translate("guide.serverInfo.list.amount")}{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.addene")}
              </span>
            </li>

            <li>
              /addvit {translate("guide.serverInfo.list.amount")}{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.addvit")}
              </span>
            </li>

            <li>
              /addcmd {translate("guide.serverInfo.list.amount")}{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.addcmd")}
              </span>
            </li>

            <li>
              /reset{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.reset")}
              </span>
            </li>

            <li>
              /reset auto{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.resetAuto")}
              </span>
            </li>

            <li>
              /evo{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.evo")}
              </span>
            </li>

            <li>
              /attack{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.attack")}
              </span>
            </li>

            <li>
              /store ruud{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.storeRuud")}
              </span>
            </li>

            <li>
              /store wcc{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.storeWcc")}
              </span>
            </li>

            <li>
              /warehouse (number){" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.warehouse")}
              </span>
            </li>

            <li>
              /clearinv{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.clearinv")}
              </span>
            </li>

            <li>
              /clearextinv{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.clearextinv")}
              </span>
            </li>

            <li>
              /clearinvmuun{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.clearinvmuun")}
              </span>
            </li>

            <li>
              /cleareventinv{" "}
              <span style={{ color: "grey" }}>
                - {translate("commands.cleareventinv")}
              </span>
            </li>
          </ul>
          <p>{translate("guide.serverInfo.outro")}</p>
        </>
      ),
    },
    {
      title: translate("rewards.title"),
      icon: faCoins,
      content: (
        <>
          <p>{translate("rewards.description")}</p>
          <SearchInput
            type="text"
            placeholder={translate("rewards.search")}
            value={rewardSearch}
            onChange={(e) => setRewardSearch(e.target.value)}
            style={{ marginBottom: "15px" }}
          />
          <BossGrid>
            {filteredRewards.map((reward, i) => (
              <BossCard style={{ height: "auto" }} key={i}>
                <BossHeader>
                  <ClassIconBackground iconScale={60} size={90}>
                    <img
                      src={reward.icon || BloodCastleIcon}
                      alt={reward.name}
                      style={{
                        width: 85,
                        height: 85,
                        objectFit: "contain"
                      }}
                    />
                  </ClassIconBackground>

                  <BossText>
                    <BossTitle>{reward.name}</BossTitle>
                    <BossSubtitle>
                      {reward.location && (
                        <span><strong>{translate("rewards.location")}:</strong> {reward.location}</span>
                      )}

                      {reward.ruud && (
                        <span><strong>{translate("rewards.ruud")}:</strong> {reward.ruud}</span>
                      )}

                      {reward.wcoin && (
                        <span><strong>{translate("rewards.wcoin")}:</strong> {reward.wcoin}</span>
                      )}

                      {reward.goblin && (
                        <span><strong>{translate("rewards.goblin")}:</strong> {reward.goblin}</span>
                      )}
                    </BossSubtitle>
                  </BossText>
                </BossHeader>
              </BossCard>
            ))}
          </BossGrid>
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
                <li>Bloodangel <span style={{ color: "grey" }}>- Level: 400 | Ancient: Ruud Shop | Excellent: Deep Dungeon 1, 2, 3, 4, 5</span></li>
                <li>Darkangel <span style={{ color: "grey" }}>- Level: 600 | Ancient: Ruud Shop | Excellent: Swamp of Darkness</span></li>
                <li>Holyangel <span style={{ color: "grey" }}>- Level: 800 | Ancient: Ruud Shop | Excellent: Kubera Mines</span></li>
                <li>Soul <span style={{ color: "grey" }}>- Level: 900 | Ancient: Ruud Shop | Excellent: Abyss of Atlans 1, 2, 3</span></li>
                <li>Blue Eye <span style={{ color: "grey" }}>- Level: 1000 | Ancient: Ruud Shop | Excellent: Scorched Canyon</span></li>
                <li>Silver Heart <span style={{ color: "grey" }}>- Level: 1100 | Ancient: Ruud Shop | Excellent: Crimson Icarus</span></li>
                <li>Manticore <span style={{ color: "grey" }}>- Level: 1200 | Ancient: Ruud Shop | Excellent: Arenil Temple</span></li>
                <li>Brilliant <span style={{ color: "grey" }}>- Level: 1300 | Ancient: Ruud Shop | Excellent: Ashen Aida</span></li>
                <li>Apocalypse <span style={{ color: "grey" }}>- Level: 1400 | Ancient: Ruud Shop | Excellent: Burning Kethotum, Kanturu Underground, Ignis Volcano</span></li>
                <li>Lightning <span style={{ color: "grey" }}>- Level: 1500 | Ancient: Ruud Shop | Excellent: Bloody Tarkan, Tormenta Island, Twisted Karutan</span></li>
                <li>Temple Guard <span style={{ color: "grey" }}>- Level: 1500 | Ancient: Ruud Shop | Excellent: Swamp of Doom, Kardamahal Temple</span></li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
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
                                    icon={BloodCastleIcon}
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
