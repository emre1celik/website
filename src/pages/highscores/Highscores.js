import { useState, useEffect } from "react";
import {
  HighscoresWrapper,
  HighscoresContent,
  HighscoresBox,
  HighscoresFilter,
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
import DuprianIcon from "../../assets/images/gens/duprian.png";
import VanertIcon from "../../assets/images/gens/vanert.png";
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
  const [selectedClass, setSelectedClass] = useState("all");
  const [players, setPlayers] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("players"); // default tab
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
    if (activeTab !== "bosses") return;

    fetch("https://api.myramu.online/api/bosses")
      .then(res => res.json())
      .then(data => {
        setBosses(data.bosses || []);
      });
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== "bosses" || bosses.length === 0) return;

    const topBosses = bosses;


    setLoading(true);

    Promise.all(
      topBosses.map((boss) =>
        fetch(
          `https://api.myramu.online/api/top-boss-kills?boss=${encodeURIComponent(
            boss
          )}&limit=10`
        )
          .then((res) => res.json())
          .then((data) => ({ boss, data: data.top_kills || [] }))
      )
    )
      .then((results) => {
        const map = {};
        results.forEach(({ boss, data }) => {
          map[boss] = data;
        });
        setBossData(map);
      })
      .finally(() => setLoading(false));
  }, [activeTab, bosses]);


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

  const gensMap = {
    0: null,
    1: { icon: DuprianIcon, name: "Duprian" },
    2: { icon: VanertIcon, name: "Vanert" },
  };

  function getGensInfo(gens) {
    return gensMap[gens] || null;
  }

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

  function getClassInfo(raceId) {
    for (const key in classIconMap) {
      if (classIconMap[key].ids.includes(raceId)) {
        return { icon: classIconMap[key].icon, key };
      }
    }
    return { icon: DefaultIcon, key: "unknown" };
  }
  function formatNumber(num) {
    return num?.toLocaleString("en-US");
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
          const decodedGuilds = (data.top_guilds || []).map((guild) => {
            // decode Base64
            let name = "";
            try {
              name = atob(guild.guild_name); // Base64 → binary string
              name = name.replace(/\0+$/, ""); // remove trailing nulls
            } catch (e) {
              name = guild.guild_name; // fallback if decode fails
            }

            return { ...guild, guild_name: name };
          });

          setGuilds(decodedGuilds);
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
          setPlayers(data.players || []);
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

  return (
    <>
      <Helmet>
        <title>Myra MuOnline - Highscores | Season 19 Episode 2-3</title>
        <meta
          name="description"
          content="View the top players on Myra MuOnline! Check highscores by class and see who dominates the rankings in Season 19 Episode 2-3."
        />
        <meta
          name="keywords"
          content="mu online highscores, myra mu rankings, top players muonline, season 19 highscores"
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
                      {translate("highscores.loadingPlayers")}
                    </div>
                  ) : errorEvents ? (
                    <p style={{ color: "red" }}>{error}</p>
                  ) : (
                    <>
                      <HighscoresFilter>
                        {" "}
                        <label>
                          {translate("highscores.filterByClass")}
                        </label>{" "}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                          }}
                        >
                          {" "}
                          <img
                            src={
                              selectedClass === "all"
                                ? DefaultIcon
                                : classIconMap[selectedClass].icon
                            }
                            alt={selectedClass}
                            style={{ width: "28px", height: "28px" }}
                          />{" "}
                          <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                          >
                            {" "}
                            <option value="all">
                              {translate("highscores.all")}
                            </option>{" "}
                            {Object.keys(classIconMap).map((key) => (
                              <option key={key} value={key}>
                                {" "}
                                {classNamesMap[key] || key}{" "}
                              </option>
                            ))}{" "}
                          </select>{" "}
                        </div>{" "}
                      </HighscoresFilter>{" "}
                      <HighscoresTable>
                        <thead>
                          <tr>
                            <th>{translate("highscores.rank")}</th>
                            <th>{translate("highscores.name")}</th>
                            <th>{translate("highscores.class")}</th>
                            <th>{translate("highscores.resets")}</th>
                            <th>{translate("highscores.level")}</th>
                            <th className="hideOnSmall">
                              {translate("highscores.strength")}
                            </th>
                            <th className="hideOnSmall">
                              {translate("highscores.agility")}
                            </th>
                            <th className="hideOnSmall">
                              {translate("highscores.vitality")}
                            </th>
                            <th className="hideOnSmall">
                              {translate("highscores.energy")}
                            </th>
                            <th>{translate("highscores.gens")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {players.map((player, index) => (
                            <tr key={index}>
                              <td>
                                {index + 1}{" "}
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
                                    {" "}
                                    {/* bronze */}
                                    <FontAwesomeIcon icon={faCrown} />
                                  </RankIcon>
                                )}
                              </td>

                              <td>
                                <GlowingName rank={index}>
                                  {player.name}
                                </GlowingName>
                              </td>
                              <td>
                                {(() => {
                                  const { icon, key } = getClassInfo(
                                    player.race
                                  );
                                  return (
                                    <img
                                      src={icon}
                                      alt={`Class ${player.race}`}
                                      title={
                                        classNamesMap[key] || "Unknown Class"
                                      }
                                      style={{
                                        width: "32px",
                                        height: "32px",
                                        cursor: "pointer",
                                      }}
                                    />
                                  );
                                })()}
                              </td>
                              <td>
                                {player.grand_reset > 0 ? (
                                  <>
                                    {formatNumber(
                                      player.reset + player.grand_reset * 100
                                    )}
                                  </>
                                ) : (
                                  formatNumber(player.reset)
                                )}
                              </td>

                              <td>{formatNumber(player.level)}</td>
                              <td className="hideOnSmall">
                                {formatNumber(player.strength)}
                              </td>
                              <td className="hideOnSmall">
                                {formatNumber(player.agility)}
                              </td>
                              <td className="hideOnSmall">
                                {formatNumber(player.vitality)}
                              </td>
                              <td className="hideOnSmall">
                                {formatNumber(player.energy)}
                              </td>
                              <td>
                                {(() => {
                                  const gens = getGensInfo(player.gens);
                                  return gens ? (
                                    <img
                                      src={gens.icon}
                                      alt={gens.name}
                                      title={gens.name}
                                      style={{
                                        width: "28px",
                                        height: "28px",
                                      }}
                                    />
                                  ) : (
                                    <span style={{ opacity: 0.3 }}>–</span>
                                  );
                                })()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </HighscoresTable>
                    </>
                  )}
                </>
              )}
              {activeTab === "bosses" && (
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
                    </div>
                  ) : (
                    <BossGrid>
                      {bossDisplayOrder
                        .filter((bossName) => bossData[bossName])
                        .map((bossName) => {
                          const rows = bossData[bossName];
                          const bossCfg = bossConfigMap[bossName];

                          return (
                            <BossCard key={bossName}>
                              <BossHeader>
                                {bossCfg && (
                                  <img
                                    src={bossCfg.src}
                                    alt={bossName}
                                    style={{
                                      width: `${bossCfg.width}px`,
                                      height: `${bossCfg.height}px`,
                                      objectFit: "contain",
                                      flexShrink: 0,
                                    }}
                                  />
                                )}

                                <BossText>
                                  <BossTitle>{bossName}</BossTitle>

                                  {bossCfg && (
                                    <BossSubtitle>
                                      <span>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {bossCfg.map}
                                      </span>
                                      <span>
                                        <FontAwesomeIcon icon={faHeart} /> HP: {bossCfg.hp}
                                      </span>
                                    </BossSubtitle>
                                  )}
                                </BossText>
                              </BossHeader>

                              <BossTableWrapper>
                                <HighscoresTable>
                                  <thead>
                                    <tr>
                                      <th>Rank</th>
                                      <th>Character</th>
                                      <th>Kills</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {rows.map((row, index) => (
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
                                          <GlowingName rank={index}>{row.name}</GlowingName>
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
                      {translate("highscores.loadingEvents")}
                    </div>
                  ) : errorEvents ? (
                    <p style={{ color: "red" }}>{errorEvents}</p>
                  ) : (
                    <>
                      <HighscoresFilter>
                        <label>{translate("highscores.filterByEvent")}</label>
                        <select
                          value={selectedEvent}
                          onChange={(e) => setSelectedEvent(e.target.value)}
                        >
                          <option value="0">Blood Castle</option>
                          <option value="1">Devil Square</option>
                          <option value="2">Chaos Castle</option>
                        </select>
                      </HighscoresFilter>

                      <HighscoresTable>
                        <thead>
                          <tr>
                            <th>{translate("highscores.rank")}</th>
                            <th>{translate("highscores.character")}</th>
                            <th>{translate("highscores.class")}</th>
                            <th>{translate("highscores.score")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {events
                            .filter(
                              (event) =>
                                selectedEvent === "all" ||
                                String(event.event_id) === selectedEvent
                            )
                            .map((event, index) => (
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
                                    {event.char_name}
                                  </GlowingName>
                                </td>
                                <td>
                                  {(() => {
                                    const { icon, key } = getClassInfo(
                                      event.race
                                    );
                                    return (
                                      <img
                                        src={icon}
                                        alt={key}
                                        title={classNamesMap[key] || "Unknown"}
                                        style={{
                                          width: "32px",
                                          height: "32px",
                                        }}
                                      />
                                    );
                                  })()}
                                </td>
                                <td>{formatNumber(event.score)}</td>
                              </tr>
                            ))}
                        </tbody>
                      </HighscoresTable>
                    </>
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
                              {index + 1}{" "}
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
                                  {" "}
                                  {/* bronze */}
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
                  )}
                </>
              )}
            </ControlPanelTabContent>
          </HighscoresBox>
        </HighscoresContent>

        <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </HighscoresWrapper>
    </>
  );
}

export default Highscores;
