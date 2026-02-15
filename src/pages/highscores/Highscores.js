import { useState, useEffect } from "react";
import {
  HighscoresWrapper,
  HighscoresContent,
  HighscoresBox,
  HighscoresTable,
  RankIcon,
  GlowingName,
  BossGrid,
  BossCard,
  BossTitle,
  BossTableWrapper,
  BossSubtitle,
  BossHeader,
  BossText,
  PlayerGrid,
  PlayerCard,
  PlayerHeader,
  PlayerTitle,
  PlayerPopupOverlay,
  PlayerPopup,
  PopupHeader,
  CloseButton,
  PopupSection,
  PopupRow,
  Divider,
} from "./HighscoresStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faHeart, faMapMarkerAlt, faSkull, faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  faUsers,
  faTrophy,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import DwIcon from "../../assets/images/classes/dw.png";
import DkIcon from "../../assets/images/classes/dk.png";
import ElfIcon from "../../assets/images/classes/elf.png";
import MgIcon from "../../assets/images/classes/mg.png";
import DlIcon from "../../assets/images/classes/dl.png";
import SumIcon from "../../assets/images/classes/sum.png";
import RfIcon from "../../assets/images/classes/rf.png";
import GlIcon from "../../assets/images/classes/gl.png";
import RwIcon from "../../assets/images/classes/rw.png";
import SlIcon from "../../assets/images/classes/sl.png";
import GcIcon from "../../assets/images/classes/gc.png";
import LwIcon from "../../assets/images/classes/lw.png";
import MaIcon from "../../assets/images/classes/ma.png";
import IkIcon from "../../assets/images/classes/ik.png";
import AlcIcon from "../../assets/images/classes/al.png";
import CoreMagriffyIcon from "../../assets/images/bosses/core_magriffy.png";
import GodOfDarknessIcon from "../../assets/images/bosses/god_of_darkness.png";
import KundunIcon from "../../assets/images/bosses/illusion_of_kundun.png";
import LordFereaIcon from "../../assets/images/bosses/lord_of_ferea.png";
import LordSilvesterIcon from "../../assets/images/bosses/lord_silvester.png";
import NightmareIcon from "../../assets/images/bosses/nightmare.png";
import NixIcon from "../../assets/images/bosses/nix.png";
import SelupanIcon from "../../assets/images/bosses/selupan.png";

import DefaultIcon from "../../assets/images/classes/default.png";
import {
  ControlPanelTabButton,
  ControlPanelTabContent,
  ControlPanelTabs,
} from "../control_panel/ControlPanelStyles";
import { useTranslation } from "../../context/TranslationContext";
import GuildEmblem from "../../components/guild_emblem/GuildEmblem";

function Highscores({ user, currentTheme, onThemeChange }) {
  const { translate } = useTranslation();
  const [selectedClass] = useState("all");
  const [players, setPlayers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("players");
  const [events, setEvents] = useState([]);
  const [guilds, setGuilds] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [loadingGuilds, setLoadingGuilds] = useState(false);
  const [errorEvents, setErrorEvents] = useState("");
  const [errorGuilds, setErrorGuilds] = useState("");
  const classNamesMap = {
    dw: "Dark Wizard",
    dk: "Dark Knight",
    elf: "Elf",
    mg: "Magic Gladiator",
    dl: "Dark Lord",
    sum: "Summoner",
    rf: "Rage Fighter",
    gl: "Grow Lancer",
    rw: "Rune Wizard",
    sl: "Slayer",
    gc: "Gun Grusher",
    lw: "Light Wizard",
    ma: "Mage: Lemuria",
    ik: "Illusion Knight",
    al: "Alchemist",
  }; const eventMeta = {
    0: {
      name: "Blood Castle",
      description: "Race against time to destroy the Crystal Statue",
      stats: "Score • Speed • Team Coordination",
      icon: faSkull,
    },
    1: {
      name: "Devil Square",
      description: "Survive endless monster waves for maximum score",
      stats: "Kills • Damage • AoE Efficiency",
      icon: faSkull,
    },
    2: {
      name: "Chaos Castle",
      description: "Last man standing in a shrinking arena",
      stats: "PvP • Survivability • Positioning",
      icon: faSkull,
    },
  };
  const classMeta = {
    all: {
      description: "Overall ranking across all classes and builds",
      stats: "Total Resets • Levels • Global Progression",
    },
    dw: {
      description: "Master of elemental magic and long-range spells",
      stats: "Energy • Mana • Skill Damage",
    },
    dk: {
      description: "Melee warrior with devastating physical strength",
      stats: "Strength • Vitality • Attack Damage",
    },
    elf: {
      description: "Agile archer supporting allies with buffs",
      stats: "Agility • Energy • Support Skills",
    },
    mg: {
      description: "Hybrid fighter combining magic and melee",
      stats: "Strength • Energy • Hybrid Damage",
    },
    dl: {
      description: "Commander using dark magic and leadership",
      stats: "Energy • Leadership • Curse Damage",
    },
    sum: {
      description: "Summoner controlling powerful spirits",
      stats: "Energy • Summon Damage",
    },
    rf: {
      description: "Close-range brawler with explosive combos",
      stats: "Vitality • Strength • Combo Damage",
    },
    gl: {
      description: "Spear master with balanced offense",
      stats: "Strength • Agility • Pierce Damage",
    },
    al: {
      description: "Master of potions, transmutation, and support chemistry",
      stats: "Energy • Crafting • Support Effects",
    },
    rw: {
      description: "Rune-enhanced spellcaster",
      stats: "Energy • Rune Power • Skill Damage",
    },
    sl: {
      description: "High-speed assassin with burst damage",
      stats: "Agility • Critical Damage",
    },
    gc: {
      description: "Gun specialist with rapid fire attacks",
      stats: "Agility • Attack Speed • DPS",
    },
    lw: {
      description: "Light-based spellcaster with control magic",
      stats: "Energy • Crowd Control",
    },
    ma: {
      description: "Ancient mage of Lemuria",
      stats: "Energy • Mastery Damage",
    },
    ik: {
      description: "Knight manipulating illusions and blades",
      stats: "Strength • Agility • Hybrid Damage",
    },
  };

  const [bossData, setBossData] = useState({});
  const bossConfigMap = {
    "God of Darkness": {
      src: GodOfDarknessIcon,
      width: 84,
      height: 84,
      map: "Swamp of Darkness",
      hp: "200,000,000",
    },
    "Nix": {
      src: NixIcon,
      width: 66,
      height: 84,
      map: "Nixies Lake",
      hp: "1,000,000,000",
    },
    "Lord of Ferea": {
      src: LordFereaIcon,
      width: 82,
      height: 84,
      map: "Ferea",
      hp: "250,000,000",
    },
    "Lord Silvester": {
      src: LordSilvesterIcon,
      width: 80,
      height: 84,
      map: "Uruk Mountain",
      hp: "150,000,000",
    },
    "Core Magriffy": {
      src: CoreMagriffyIcon,
      width: 40,
      height: 84,
      map: "Nars, Acheron",
      hp: "250,000,000",
    },
    "Selupan": {
      src: SelupanIcon,
      width: 64,
      height: 84,
      map: "Raklion",
      hp: "48,000,000",
    },
    "Nightmare": {
      src: NightmareIcon,
      width: 44,
      height: 84,
      map: "Kanturu Core",
      hp: "1,500,000",
    },
    "Illusion of Kundun": {
      src: KundunIcon,
      width: 62,
      height: 84,
      map: "Kalima",
      hp: "10,000,000",
    },
  };



  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    if (bosses.length === 0 || Object.keys(bossData).length > 0) return;

    setLoading(true);

    Promise.all(
      bosses.map((boss) =>
        fetch(
          `https://api.myramu.online/api/top-boss-kills?boss=${encodeURIComponent(boss)}&limit=10`
        )
          .then(res => res.json())
          .then(data => ({ boss, data: data.top_kills || [] }))
      )
    )
      .then(results => {
        const map = {};
        results.forEach(({ boss, data }) => {
          map[boss] = data;
        });
        setBossData(map);
      })
      .finally(() => setLoading(false));
  }, [bosses, bossData]);

  const [selectedPlayer, setSelectedPlayer] = useState(null);


  const classIconMap = {
    dw: {
      ids: [0, 1, 3, 7, 15],
      icon: DwIcon,
    },
    dk: {
      ids: [16, 17, 19, 23, 31],
      icon: DkIcon,
    },
    elf: {
      ids: [32, 33, 35, 39, 47],
      icon: ElfIcon,
    },
    mg: {
      ids: [48, 49, 51, 55, 63],
      icon: MgIcon,
    },
    dl: {
      ids: [64, 65, 67, 71, 79],
      icon: DlIcon,
    },
    sum: {
      ids: [80, 81, 83, 87, 95],
      icon: SumIcon,
    },
    rf: {
      ids: [96, 97, 99, 103, 111],
      icon: RfIcon,
    },
    gl: {
      ids: [112, 113, 115, 119, 127],
      icon: GlIcon,
    },
    rw: {
      ids: [128, 129, 131, 135, 143],
      icon: RwIcon,
    },
    sl: {
      ids: [144, 145, 147, 151, 159],
      icon: SlIcon,
    },
    gc: {
      ids: [160, 161, 163, 167, 175],
      icon: GcIcon,
    }, al: {
      ids: [224, 225, 227, 231, 239],
      icon: AlcIcon,
    },

    lw: {
      ids: [176, 177, 179, 183, 191],
      icon: LwIcon,
    },
    ma: {
      ids: [192, 193, 195, 199, 207],
      icon: MaIcon,
    },
    ik: {
      ids: [208, 209, 211, 215, 223],
      icon: IkIcon,
    },
  };

  const bossDisplayOrder = [
    "God of Darkness",
    "Nix",
    "Lord of Ferea",
    "Selupan",
    "Core Magriffy",
    "Lord Silvester",
    "Nightmare",
    "Illusion of Kundun",
  ];
  const eventConfig = [
    { id: 0, key: "bloodCastle", label: "Blood Castle" },
    { id: 1, key: "devilSquare", label: "Devil Square" },
    { id: 2, key: "chaosCastle", label: "Chaos Castle" },
  ];

  function getClassInfo(raceId) {
    const classId = parseInt(raceId, 10);

    if (Number.isNaN(classId)) {
      return { icon: DefaultIcon, key: "unknown" };
    }

    for (const key in classIconMap) {
      if (classIconMap[key].ids.some(id => id === classId)) {
        return { icon: classIconMap[key].icon, key };
      }
    }

    return { icon: DefaultIcon, key: "unknown" };
  }


  function formatNumber(num) {
    const value = Number(num);
    return Number.isFinite(value) ? value.toLocaleString("en-US") : "0";
  }

  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingEvents(true);
      setErrorEvents("");
      try {
        const res = await fetch("https://api.myramu.online/api/top-events");
        const data = await res.json();
        if (res.ok) setEvents(data.top_events || []);
        else
          setErrorEvents(
            translate("highscores.serverError").replace("{error}", data.error)
          );
      } catch (err) {
        setErrorEvents(
          translate("highscores.serverError").replace("{error}", err.message)
        );
      } finally {
        setLoadingEvents(false);
      }
    };

    const fetchGuilds = async () => {
      setLoadingGuilds(true);
      setErrorGuilds("");
      try {
        const res = await fetch("https://api.myramu.online/api/top-guilds");
        const data = await res.json();

        if (res.ok) {
          setGuilds(data.top_guilds || []);

        } else {
          setErrorGuilds(
            translate("highscores.serverError").replace("{error}", data.error)
          );
        }
      } catch (err) {
        setErrorGuilds(
          translate("highscores.serverError").replace("{error}", err.message)
        );
      } finally {
        setLoadingGuilds(false);
      }
    };

    fetchEvents();
    fetchGuilds();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchHighscores = async () => {
      setLoading(true);
      setError("");

      try {
        let url = "https://api.myramu.online/api/top-players";

        if (selectedClass !== "all") {
          const classData = classIconMap[selectedClass];
          if (classData) {
            url += `?class=${classData.ids.join(",")}`;
          }
        }

        const response = await fetch(url);

        const data = await response.json();

        if (response.ok) {
          setPlayers(data);

        } else {
          setError(
            translate("highscores.serverError").replace("{error}", data.error)
          );
        }
      } catch (err) {
        setError(
          translate("highscores.serverError").replace("{error}", err.message)
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHighscores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedClass]);
  const eventsByType = {
    0: [],
    1: [],
    2: [],
  };

  events.forEach((e) => {
    if (eventsByType[e.event_id]) {
      eventsByType[e.event_id].push(e);
    }
  });

  return (
    <>
      <Helmet>
        <title>Myra MuOnline - Highscores | Season 20 Episode 2-3</title>
        <meta
          name="description"
          content="View the top players on Myra MuOnline! Check highscores by class and see who dominates the rankings in Season 20 Episode 2-3."
        />
        <meta
          name="keywords"
          content="mu online highscores, myra mu rankings, top players muonline, Season 20 highscores"
        />
      </Helmet>

      <HighscoresWrapper>
        <Navigation user={user} />

        <HighscoresContent>
          <HighscoresBox>
            <h2>{translate("highscores.title")}</h2>
            <ControlPanelTabs>
              <ControlPanelTabButton
                active={activeTab === "players"}
                onClick={() => setActiveTab("players")}
              >
                <FontAwesomeIcon icon={faUsers} />
                <span>{translate("highscores.topPlayers")}</span>
              </ControlPanelTabButton>

              <ControlPanelTabButton
                active={activeTab === "events"}
                onClick={() => setActiveTab("events")}
              >
                <FontAwesomeIcon icon={faTrophy} />
                <span>{translate("highscores.topEvents")}</span>
              </ControlPanelTabButton>

              <ControlPanelTabButton
                active={activeTab === "guilds"}
                onClick={() => setActiveTab("guilds")}
              >
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>{translate("highscores.topGuilds")}</span>
              </ControlPanelTabButton>
            </ControlPanelTabs>

            <ControlPanelTabContent>
              {activeTab === "players" && (
                <>
                  {loading ? (
                    <div
                      style={{
                        minHeight: "150px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesomeIcon icon={faSpinner} spin />
                      &nbsp;{translate("highscores.loadingPlayers")}
                    </div>
                  ) : error ? (
                    <p style={{ color: "red" }}>{error}</p>
                  ) : !players || !players.all ? (
                    <p>{translate("highscores.loadingPlayers")}</p>
                  ) : (
                    <PlayerGrid>
                      {/* ALL CLASSES */}
                      <PlayerCard>
                        <PlayerHeader style={{ justifyContent: "flex-start" }}>
                          <img
                            src={DefaultIcon}
                            alt="All Players"
                            style={{ width: 42, height: 42, flexShrink: 0 }}
                          />

                          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                            <PlayerTitle>
                              {translate("highscores.all")} {translate("highscores.topPlayers")}
                            </PlayerTitle>

                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: "rgba(255,255,255,0.65)",
                                marginTop: "2px",
                              }}
                            >
                              {classMeta.all.description}
                            </span>

                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: "rgba(255,255,255,0.65)",
                              }}
                            >
                              <strong style={{ color: "#aaa" }}>Focus:</strong>{" "}
                              {classMeta.all.stats}
                            </span>
                          </div>
                        </PlayerHeader>


                        <BossTableWrapper>
                          <HighscoresTable>
                            <thead>
                              <tr>
                                <th>{translate("highscores.rank")}</th>
                                <th>{translate("highscores.name")}</th>
                                <th>{translate("highscores.resets")}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {players.all.map((p, i) => (
                                <tr key={i}>
                                  <td>
                                    {i + 1}
                                    {i === 0 && (
                                      <RankIcon style={{ color: "gold" }}>
                                        <FontAwesomeIcon icon={faCrown} />
                                      </RankIcon>
                                    )}
                                    {i === 1 && (
                                      <RankIcon style={{ color: "silver" }}>
                                        <FontAwesomeIcon icon={faCrown} />
                                      </RankIcon>
                                    )}
                                    {i === 2 && (
                                      <RankIcon style={{ color: "#cd7f32" }}>
                                        <FontAwesomeIcon icon={faCrown} />
                                      </RankIcon>
                                    )}

                                  </td>
                                  <td>
                                    <GlowingName
                                      rank={i}
                                      style={{ cursor: "pointer" }}
                                      onClick={() => setSelectedPlayer(p)}
                                    >
                                      {p.name}
                                    </GlowingName>
                                  </td>
                                  <td>{Number(p.reset) + Number(p.grand_reset) * 100}</td>
                                </tr>
                              ))}
                            </tbody>
                          </HighscoresTable>
                        </BossTableWrapper>
                      </PlayerCard>

                      {/* PER CLASS */}
                      {Object.keys(classIconMap).map(
                        (key) =>
                          players[key] &&
                          players[key].length > 0 && (
                            <PlayerCard key={key}>
                              <PlayerHeader style={{ justifyContent: "flex-start" }}>
                                <img
                                  src={classIconMap[key].icon}
                                  alt={key}
                                  style={{ width: 42, height: 42, flexShrink: 0 }}
                                />

                                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                                  <PlayerTitle>{classNamesMap[key]}</PlayerTitle>

                                  <span
                                    style={{
                                      fontSize: "0.75rem",
                                      color: "rgba(255,255,255,0.65)",
                                      marginTop: "2px",
                                    }}
                                  >
                                    {classMeta[key]?.description}
                                  </span>

                                  <span
                                    style={{
                                      fontSize: "0.75rem",
                                      color: "rgba(255,255,255,0.65)",
                                    }}
                                  >
                                    <strong style={{ color: "#aaa" }}>Focus:</strong>{" "}
                                    {classMeta[key]?.stats}
                                  </span>
                                </div>
                              </PlayerHeader>


                              <BossTableWrapper>
                                <HighscoresTable>
                                  <thead>
                                    <tr>
                                      <th>{translate("highscores.rank")}</th>
                                      <th>{translate("highscores.name")}</th>
                                      <th>{translate("highscores.resets")}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {players[key].map((p, i) => (
                                      <tr key={i}>
                                        <td>
                                          {i + 1}
                                          {i === 0 && (
                                            <RankIcon style={{ color: "gold" }}>
                                              <FontAwesomeIcon icon={faCrown} />
                                            </RankIcon>
                                          )}
                                          {i === 1 && (
                                            <RankIcon style={{ color: "silver" }}>
                                              <FontAwesomeIcon icon={faCrown} />
                                            </RankIcon>
                                          )}
                                          {i === 2 && (
                                            <RankIcon style={{ color: "#cd7f32" }}>
                                              <FontAwesomeIcon icon={faCrown} />
                                            </RankIcon>
                                          )}

                                        </td>
                                        <td>
                                          <GlowingName
                                            rank={i}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setSelectedPlayer(p)}
                                          >
                                            {p.name}
                                          </GlowingName>
                                        </td>
                                        <td>
                                          {Number(p.reset) + Number(p.grand_reset) * 100
                                          }
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </HighscoresTable>
                              </BossTableWrapper>
                            </PlayerCard>
                          )
                      )}
                    </PlayerGrid>
                  )}
                </>
              )}

              {activeTab === "events" && (
                <>
                  {loadingEvents ? (
                    <div style={{ minHeight: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      &nbsp;{translate("highscores.loadingEvents")}
                    </div>
                  ) : errorEvents ? (
                    <p style={{ color: "red" }}>{errorEvents}</p>
                  ) : (
                    <BossGrid>
                      {[0, 1, 2].map((eventId) => {
                        const meta = eventMeta[eventId];
                        const rows = eventsByType[eventId] || [];

                        return (
                          <BossCard key={eventId} style={{ height: "500px", width: "100%" }}>
                            {/* Header */}
                            <BossHeader>
                              <FontAwesomeIcon
                                icon={meta.icon}
                                size="2x"
                                style={{ color: "#aaa", flexShrink: 0 }}
                              />

                              <BossText>
                                <BossTitle>{meta.name}</BossTitle>

                                <BossSubtitle>
                                  <span>{meta.description}</span>
                                  <span>
                                    <strong style={{ color: "#aaa" }}>Focus:</strong>{" "}
                                    {meta.stats}
                                  </span>
                                </BossSubtitle>
                              </BossText>
                            </BossHeader>

                            {/* Table */}
                            <BossTableWrapper>
                              <HighscoresTable>
                                <thead>
                                  <tr>
                                    <th>{translate("highscores.rank")}</th>
                                    <th>{translate("highscores.character")}</th>
                                    <th>{translate("highscores.score")}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {rows.slice(0, 25).map((row, index) => {
                                    const { icon, key } = getClassInfo(row.race);

                                    return (
                                      <tr key={index}>
                                        <td>
                                          {index + 1}
                                          {index < 3 && (
                                            <RankIcon
                                              style={{
                                                color:
                                                  index === 0
                                                    ? "gold"
                                                    : index === 1
                                                      ? "silver"
                                                      : "#cd7f32",
                                              }}
                                            >
                                              <FontAwesomeIcon icon={faCrown} />
                                            </RankIcon>
                                          )}
                                        </td>

                                        <td>
                                          <GlowingName rank={index}>
                                            {row.char_name}
                                          </GlowingName>
                                        </td>

                                        <td>{formatNumber(row.score)}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </HighscoresTable>
                            </BossTableWrapper>
                          </BossCard>
                        );
                      })}
                    </BossGrid>
                  )}
                </>
              )}


              {activeTab === "guilds" && (
                <>
                  {loadingGuilds ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "150px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        style={{ marginRight: "8px" }}
                      />
                      {translate("highscores.loadingGuilds")}
                    </div>
                  ) : errorGuilds ? (
                    <p style={{ color: "red" }}>{errorGuilds}</p>
                  ) : (
                    <PlayerGrid style={{ display: "block" }}>
                      <PlayerCard style={{ height: "500px", width: "100%" }}>
                        <BossTableWrapper>
                          <HighscoresTable>
                            <thead>
                              <tr>
                                <th>{translate("highscores.rank")}</th>
                                <th>{translate("highscores.guildName")}</th>
                                <th>{translate("highscores.master")}</th>
                                <th>{translate("highscores.resets")}</th>
                                <th>{translate("highscores.emblem")}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {guilds.map((guild, index) => (
                                <tr key={index}>
                                  <td>
                                    {index + 1}
                                    {index === 0 && (
                                      <RankIcon style={{ color: "gold" }}>
                                        <FontAwesomeIcon icon={faCrown} />
                                      </RankIcon>
                                    )}
                                    {index === 1 && (
                                      <RankIcon style={{ color: "silver" }}>
                                        <FontAwesomeIcon icon={faCrown} />
                                      </RankIcon>
                                    )}
                                    {index === 2 && (
                                      <RankIcon style={{ color: "#cd7f32" }}>
                                        <FontAwesomeIcon icon={faCrown} />
                                      </RankIcon>
                                    )}
                                  </td>

                                  <td>
                                    <GlowingName rank={index}>
                                      {guild.guild_name}
                                    </GlowingName>
                                  </td>

                                  <td>{guild.master_name}</td>

                                  <td>{formatNumber(Number(guild.total_resets))}</td>

                                  <td>
                                    <GuildEmblem data={guild.emblem} scale={4} />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </HighscoresTable>
                        </BossTableWrapper>
                      </PlayerCard>
                    </PlayerGrid>
                  )}
                </>
              )}

            </ControlPanelTabContent>
          </HighscoresBox>
        </HighscoresContent>
        {selectedPlayer && (
          <PlayerPopupOverlay onClick={() => setSelectedPlayer(null)}>
            <PlayerPopup onClick={(e) => e.stopPropagation()}>
              <PopupHeader>
                <span style={{ color: "white", fontWeight: "bold" }}>{selectedPlayer.name}</span>
                <CloseButton onClick={() => setSelectedPlayer(null)}>✕</CloseButton>
              </PopupHeader>

              <PopupSection>
                <PopupRow>
                  <span>{translate("highscores.level")}</span>
                  <strong>{selectedPlayer.level}</strong>
                </PopupRow>
                <PopupRow>
                  <span>{translate("highscores.resets")}</span>
                  <strong>
                    {formatNumber(
                      Number(selectedPlayer.reset) +
                      Number(selectedPlayer.grand_reset) * 100
                    )}
                  </strong>

                </PopupRow>
                {(() => {
                  const { icon, key } = getClassInfo(selectedPlayer.race);
                  return (
                    <PopupRow>
                      <span>{translate("highscores.class")}</span>
                      <strong style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <img
                          src={icon}
                          alt={key}
                          style={{ width: 20, height: 20 }}
                        />
                        {classNamesMap[key] || "Unknown"}
                      </strong>
                    </PopupRow>
                  );
                })()}

              </PopupSection>

              <Divider />

              <PopupSection>
                <PopupRow>
                  <span>{translate("highscores.money")}</span>
                  <strong>{formatNumber(selectedPlayer.money)}</strong>
                </PopupRow>
                <PopupRow>
                  <span>{translate("highscores.ruud_money")}</span>
                  <strong>{formatNumber(selectedPlayer.ruud_money)}</strong>
                </PopupRow>
              </PopupSection>

              <Divider />

              <PopupSection>
                <PopupRow>
                  <span>{translate("highscores.life")}</span>
                  <strong>{formatNumber(selectedPlayer.life)}</strong>
                </PopupRow>
                <PopupRow>
                  <span>{translate("highscores.mana")}</span>
                  <strong>{formatNumber(selectedPlayer.mana)}</strong>
                </PopupRow>
                <PopupRow>
                  <span>{translate("highscores.strength")}</span>
                  <strong>{formatNumber(selectedPlayer.strength)}</strong>
                </PopupRow>
                <PopupRow>
                  <span>{translate("highscores.agility")}</span>
                  <strong>{formatNumber(selectedPlayer.agility)}</strong>
                </PopupRow>
                <PopupRow>
                  <span>{translate("highscores.vitality")}</span>
                  <strong>{formatNumber(selectedPlayer.vitality)}</strong>
                </PopupRow>
                <PopupRow>
                  <span>{translate("highscores.energy")}</span>
                  <strong>{formatNumber(selectedPlayer.energy)}</strong>
                </PopupRow>

                {selectedPlayer.leadership > 0 && (
                  <PopupRow>
                    <span>{translate("highscores.leadership")}</span>
                    <strong>{formatNumber(selectedPlayer.leadership)}</strong>
                  </PopupRow>
                )}
              </PopupSection>
            </PlayerPopup>
          </PlayerPopupOverlay>
        )}

        <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </HighscoresWrapper>
    </>
  );
}

export default Highscores;
