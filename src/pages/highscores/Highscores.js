import { useState, useEffect } from "react";
import { useMemo } from "react";
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
import { faCrown, faKhanda, faSkull, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ClassIconBackground } from "./HighscoresStyles";
import {
  faUsers,
  faTrophy,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import DwIcon from "../../assets/images/classes/dw.ico";
import DkIcon from "../../assets/images/classes/dk.ico";
import ElfIcon from "../../assets/images/classes/elf.ico";
import MgIcon from "../../assets/images/classes/mg.ico";
import DlIcon from "../../assets/images/classes/dl.ico";
import SumIcon from "../../assets/images/classes/sum.ico";
import RfIcon from "../../assets/images/classes/rf.ico";
import GlIcon from "../../assets/images/classes/gl.ico";
import RwIcon from "../../assets/images/classes/rw.ico";
import SlIcon from "../../assets/images/classes/sl.ico";
import GcIcon from "../../assets/images/classes/gc.ico";
import LwIcon from "../../assets/images/classes/lw.ico";
import MaIcon from "../../assets/images/classes/ma.ico";
import IkIcon from "../../assets/images/classes/ik.ico";
import AlcIcon from "../../assets/images/classes/al.ico";

import IceQueenIcon from "../../assets/images/monsters/ice_queen.png";
import GorgonIcon from "../../assets/images/monsters/gorgon.png";
import BalrogIcon from "../../assets/images/monsters/balrog.png";
import RedDragonIcon from "../../assets/images/monsters/red_dragon.png";
import HydraIcon from "../../assets/images/monsters/hydra.png";
import ZaikanIcon from "../../assets/images/monsters/zaikan.png";
import PhoenixIcon from "../../assets/images/monsters/phoenix_darkness.png";
import HellmaineIcon from "../../assets/images/monsters/hellmaine.png";

import CoreMagriffyIcon from "../../assets/images/bosses/core_magriffy.png";
import GodOfDarknessIcon from "../../assets/images/bosses/god_of_darkness.png";
import KundunIcon from "../../assets/images/bosses/illusion_of_kundun.png";
import LordFereaIcon from "../../assets/images/bosses/lord_of_ferea.png";
import LordSilvesterIcon from "../../assets/images/bosses/lord_silvester.png";
import NightmareIcon from "../../assets/images/bosses/nightmare.png";
import NixIcon from "../../assets/images/bosses/nix.png";
import SelupanIcon from "../../assets/images/bosses/selupan.png";
import MedusaIcon from "../../assets/images/bosses/medusa.png";

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
  const [monsters, setMonsters] = useState([]);
  const [monsterData, setMonsterData] = useState({});
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
    3: {
      name: "Maze of Dimensions",
      description: "Fight through dimensional labyrinth stages",
      stats: "League Score • Survival • Efficiency",
      icon: faTrophy,
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
  const monsterConfigMap = {

    "Ice Queen": {
      src: IceQueenIcon,
      width: 120,
      height: 120,
      map: "Devias",
      hp: "75,000",
      defense: "900",
      respawn: "60 min",
    },

    "Gorgon": {
      src: GorgonIcon,
      width: 120,
      height: 120,
      map: "Devias",
      hp: "45,000",
      defense: "600",
      respawn: "30 min",
    },

    "Balrog": {
      src: BalrogIcon,
      width: 120,
      height: 120,
      map: "Atlans",
      hp: "120,000",
      defense: "1,200",
      respawn: "60 min",
    },

    "Red Dragon": {
      src: RedDragonIcon,
      width: 135,
      height: 135,
      map: "Lorencia / Noria / Devias",
      hp: "150,000",
      defense: "1,400",
      respawn: "90 min",
    },

    "Hydra": {
      src: HydraIcon,
      width: 110,
      height: 110,
      map: "Atlans",
      hp: "200,000",
      defense: "1,800",
      respawn: "120 min",
    },

    "Zaikan": {
      src: ZaikanIcon,
      width: 140,
      height: 140,
      map: "Tarkan",
      hp: "300,000",
      defense: "2,500",
      respawn: "120 min",
    },

    "Phoenix of Darkness": {
      src: PhoenixIcon,
      width: 120,
      height: 120,
      map: "Icarus",
      hp: "450,000",
      defense: "3,500",
      respawn: "180 min",
    },

    "Hellmaine": {
      src: HellmaineIcon,
      width: 120,
      height: 120,
      map: "Aida",
      hp: "600,000",
      defense: "4,200",
      respawn: "180 min",
    },

  };
  const [bossData, setBossData] = useState({});
  const bossConfigMap = {
    "God of Darkness": {
      src: GodOfDarknessIcon,
      width: 130,
      height: 130,
      map: "Swamp of Darkness",
      hp: "2,000,000,000",
      defense: "10,000",
      respawn: "2 ~ 4 hours",
    },
    "Nix": {
      src: NixIcon,
      width: 125,
      height: 125,
      map: "Nixies Lake",
      hp: "1,800,000,000",
      defense: "9,100",
      respawn: "2 ~ 4 hours",
    },
    "Lord of Ferea": {
      src: LordFereaIcon,
      width: 130,
      height: 130,
      map: "Ferea",
      hp: "2,000,000,000",
      defense: "8,500",
      respawn: "2 ~ 4 hours",
    },
    "Lord Silvester": {
      src: LordSilvesterIcon,
      width: 100,
      height: 100,
      map: "Uruk Mountain",
      hp: "1,000,000,000",
      defense: "7,400",
      respawn: "2 ~ 4 hours",
    },
    "Core Magriffy": {
      src: CoreMagriffyIcon,
      width: 130,
      height: 130,
      map: "Nars, Acheron",
      hp: "2,000,000,000",
      defense: "7,650",
      respawn: "2 ~ 4 hours",
    },
    "Selupan": {
      src: SelupanIcon,
      width: 120,
      height: 120,
      map: "Raklion",
      hp: "800,000,000",
      defense: "6,250",
      respawn: "2 hours",
    },
    "Nightmare": {
      src: NightmareIcon,
      width: 80,
      height: 100,
      map: "Kanturu Core",
      hp: "150,000,000",
      defense: "6,000",
      respawn: "2 ~ 4 hours",
    },
    "Kundun": {
      src: KundunIcon,
      width: 150,
      height: 150,
      map: "Kalima",
      hp: "50,000,000",
      defense: "1,500",
      respawn: "2 ~ 4 hours",
    },
    "Medusa": {
      src: MedusaIcon,
      width: 150,
      height: 150,
      map: "Swamp of Peace",
      hp: "2,000,000,000",
      defense: "5,500",
      respawn: "2 ~ 4 hours",
    }
  };

  function getPkStatus(pkLevel) {
    const level = Number(pkLevel);

    if (level === 3) return { label: "Normal", color: "#aaa" };
    if (level === 1 || level === 2)
      return { label: "Hero", color: "#00ff90" };
    if (level >= 4)
      return { label: "Player Killer", color: "#ff3c3c" };

    return { label: "Unknown", color: "#fff" };
  }
  const [bosses, setBosses] = useState([]);
  useEffect(() => {
    fetch("https://api.myramu.online/api/bosses")
      .then(res => res.json())
      .then(data => {
        setBosses(data.bosses || []);
      });
  }, []);
  useEffect(() => {
    fetch("https://api.myramu.online/api/monsters")
      .then(res => res.json())
      .then(data => {
        setMonsters(data.monsters || []);
      });
  }, []);
  useEffect(() => {

    if (monsters.length === 0 || Object.keys(monsterData).length > 0)
      return;

    Promise.all(
      monsters.map(monster =>
        fetch(
          `https://api.myramu.online/api/top-monster-kills?monster=${encodeURIComponent(monster)}&limit=10`
        )
          .then(res => res.json())
          .then(data => ({ monster, data: data.top_kills || [] }))
      )
    ).then(results => {

      const map = {};

      results.forEach(({ monster, data }) => {
        map[monster] = data;
      });

      setMonsterData(map);
    });

  }, [monsters, monsterData]);
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
      ids: [0, 1, 2, 3, 7, 8, 15],
      icon: DwIcon,
    },
    dk: {
      ids: [16, 17, 18, 19, 20, 23, 31],
      icon: DkIcon,
    },
    elf: {
      ids: [32, 33, 34, 35, 36, 39, 47],
      icon: ElfIcon,
    },
    mg: {
      ids: [48, 49, 50, 51, 52, 55, 63],
      icon: MgIcon,
    },
    dl: {
      ids: [64, 65, 66, 67, 68, 71, 79],
      icon: DlIcon,
    },
    sum: {
      ids: [80, 81, 82, 83, 84, 87, 95],
      icon: SumIcon,
    },
    rf: {
      ids: [96, 97, 98, 99, 100, 103, 111],
      icon: RfIcon,
    },
    gl: {
      ids: [112, 113, 114, 115, 116, 119, 127],
      icon: GlIcon,
    },
    rw: {
      ids: [128, 129, 130, 131, 132, 135, 143],
      icon: RwIcon,
    },
    sl: {
      ids: [144, 145, 146, 147, 148, 151, 159],
      icon: SlIcon,
    },
    gc: {
      ids: [160, 161, 162, 163, 164, 167, 175],
      icon: GcIcon,
    },
    lw: {
      ids: [176, 177, 178, 179, 180, 183, 191],
      icon: LwIcon,
    },
    ma: {
      ids: [192, 193, 194, 195, 196, 199, 207],
      icon: MaIcon,
    },
    ik: {
      ids: [208, 209, 210, 211, 212, 215, 223],
      icon: IkIcon,
    },
    al: {
      ids: [224, 225, 226, 227, 228, 231, 239],
      icon: AlcIcon,
    }
  };

  const bossDisplayOrder = [
    "God of Darkness",
    "Nix",
    "Lord of Ferea",
    "Selupan",
    "Core Magriffy",
    "Lord Silvester",
    "Nightmare",
    "Kundun",
    "Medusa",
  ];
  const monsterDisplayOrder = [
    "Ice Queen",
    "Gorgon",
    "Balrog",
    "Red Dragon",
    "Hydra",
    "Zaikan",
    "Phoenix of Darkness",
    "Hellmaine",
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
    3: [],
  };

  events.forEach((e) => {
    if (eventsByType[e.event_id]) {
      eventsByType[e.event_id].push(e);
    }
  });
  function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
  const shuffledClassKeys = useMemo(
    () => shuffleArray(Object.keys(classIconMap)),
    []
  );
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
                active={activeTab === "bosses"}
                onClick={() => setActiveTab("bosses")}
              >
                <FontAwesomeIcon icon={faSkull} />
                <span>{translate("highscores.topBoss")}</span>
              </ControlPanelTabButton>

              <ControlPanelTabButton
                active={activeTab === "monsters"}
                onClick={() => setActiveTab("monsters")}
              >
                <FontAwesomeIcon icon={faKhanda} />
                <span>{translate("highscores.topMonsters")}</span>
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
                          <ClassIconBackground iconScale={60}>
                            <img src={DefaultIcon} alt="All Players" />
                          </ClassIconBackground>

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
                      {shuffledClassKeys.map(
                        (key) =>
                          players[key] &&
                          players[key].length > 0 && (
                            <PlayerCard key={key}>
                              <PlayerHeader style={{ justifyContent: "flex-start" }}>
                                <ClassIconBackground iconScale={60}>
                                  <img src={classIconMap[key].icon} alt={key} />
                                </ClassIconBackground>

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
              {activeTab === "bosses" && (
                <>
                  {loading ? (
                    <div style={{
                      minHeight: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      &nbsp;Loading Boss Rankings...
                    </div>
                  ) : (
                    <BossGrid>

                      {bossDisplayOrder
                        .filter(boss => bosses.includes(boss))
                        .map((boss) => {

                          const config = bossConfigMap[boss];
                          const rows = bossData[boss] || [];

                          if (!config) return null;

                          return (
                            <BossCard key={boss}>

                              {/* HEADER */}
                              <BossHeader>

                                <ClassIconBackground iconScale={60} size={90}>
                                  <img
                                    src={config.src}
                                    alt={boss}
                                    style={{
                                      width: config.width,
                                      height: config.height,
                                      objectFit: "contain",
                                    }}
                                  />
                                </ClassIconBackground>

                                <BossText>
                                  <BossTitle>{boss}</BossTitle>

                                  <BossSubtitle>
                                    <span><strong>Location:</strong> {config.map}</span>
                                    <span>
                                      <strong>HP:</strong> {config.hp}
                                    </span>
                                    <span>
                                      <strong>Defense:</strong> {config.defense}
                                    </span>
                                    <span>
                                      <strong>Respawn:</strong> {config.respawn}
                                    </span>
                                  </BossSubtitle>
                                </BossText>

                              </BossHeader>

                              {/* TABLE */}
                              <BossTableWrapper>
                                <HighscoresTable>
                                  <thead>
                                    <tr>
                                      <th>Rank</th>
                                      <th>Player</th>
                                      <th>Kills</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    {rows.map((row, index) => (
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
                                            {row.name}
                                          </GlowingName>
                                        </td>

                                        <td>{row.kills}</td>
                                      </tr>
                                    ))}
                                  </tbody>

                                </HighscoresTable>
                              </BossTableWrapper>

                            </BossCard>
                          );
                        })}
                    </BossGrid>
                  )}
                </>
              )}{activeTab === "monsters" && (
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
                      &nbsp;Loading Monster Rankings...
                    </div>
                  ) : (
                    <BossGrid>

                      {monsterDisplayOrder
                        .filter(monster => monsters.includes(monster))
                        .map((monster) => {

                          const config = monsterConfigMap[monster];
                          const rows = monsterData[monster] || [];

                          // skip monsters without config
                          if (!config) return null;

                          return (
                            <BossCard key={monster}>

                              {/* HEADER */}
                              <BossHeader>

                                <ClassIconBackground iconScale={60} size={90}>
                                  <img
                                    src={config.src}
                                    alt={monster}
                                    style={{
                                      width: config.width,
                                      height: config.height,
                                      objectFit: "contain",
                                    }}
                                  />
                                </ClassIconBackground>

                                <BossText>
                                  <BossTitle>{monster}</BossTitle>

                                  <BossSubtitle>
                                    <span>
                                      <strong>Location:</strong> {config.map}
                                    </span>
                                    <span>
                                      <strong>HP:</strong> {config.hp}
                                    </span>
                                    <span>
                                      <strong>Defense:</strong> {config.defense}
                                    </span>
                                    <span>
                                      <strong>Respawn:</strong> {config.respawn}
                                    </span>
                                  </BossSubtitle>
                                </BossText>

                              </BossHeader>

                              {/* TABLE */}
                              <BossTableWrapper>
                                <HighscoresTable>
                                  <thead>
                                    <tr>
                                      <th>Rank</th>
                                      <th>Player</th>
                                      <th>Kills</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    {rows.map((row, index) => (
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
                                            {row.name}
                                          </GlowingName>
                                        </td>

                                        <td>{row.kills}</td>
                                      </tr>
                                    ))}
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
                      {[0, 1, 2, 3].map((eventId) => {
                        const meta = eventMeta[eventId];
                        const rows = eventsByType[eventId] || [];

                        return (
                          <BossCard key={eventId} style={{ height: "500px", width: "100%" }}>
                            {/* Header */}
                            <BossHeader>
                              <ClassIconBackground size={60} iconScale={65}>
                                <FontAwesomeIcon
                                  icon={meta.icon}
                                  style={{ fontSize: "26px", color: "#aaa" }}
                                />
                              </ClassIconBackground>

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
                                          <GlowingName
                                            rank={index}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setSelectedPlayer(row)}
                                          >
                                            {row.name}
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
                                    <GuildEmblem data={guild.emblem} scale={3} />
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
                <PopupRow>
                  <span>Location</span>
                  <strong>
                    {selectedPlayer.map_name} ({selectedPlayer.map_x}, {selectedPlayer.map_y})
                  </strong>
                </PopupRow>

                {(() => {
                  const pk = getPkStatus(selectedPlayer.pk_level);
                  return (
                    <PopupRow>
                      <span>PK Status</span>
                      <strong style={{ color: pk.color }}>
                        {pk.label}
                      </strong>
                    </PopupRow>
                  );
                })()}
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
              </PopupSection>
              <Divider />

              <PopupSection>
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
