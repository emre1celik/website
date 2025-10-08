import { useState, useEffect } from "react";
import {
  HighscoresWrapper,
  HighscoresContent,
  HighscoresBox,
  HighscoresFilter,
  HighscoresTable,
  RankIcon,
  GlowingName,
} from "./HighscoresStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  faUsers,
  faTrophy,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
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

import DefaultIcon from "../../assets/images/classes/default.png";
import {
  ControlPanelTabButton,
  ControlPanelTabContent,
  ControlPanelTabs,
} from "../control_panel/ControlPanelStyles";
import { useTranslation } from "../../context/TranslationContext";

function Highscores({ user }) {
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
  function GuildEmblem({ data }) {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
      if (!data || !canvasRef.current) return;

      const ctx = canvasRef.current.getContext("2d");
      const size = 8; // 8x8 pixels
      const scale = 16; // zoom for visibility
      const canvasSize = size * scale;
      canvasRef.current.width = canvasSize;
      canvasRef.current.height = canvasSize;
      ctx.clearRect(0, 0, canvasSize, canvasSize);

      // color palette used in MU Online
      const palette = [
        "transparent", // 0
        "#000000", // 1 - black
        "#ffffff", // 2 - white
        "#ff0000", // 3 - red
        "#00ff00", // 4 - green
        "#0000ff", // 5 - blue
        "#ffff00", // 6 - yellow
        "#00ffff", // 7 - cyan
        "#ff00ff", // 8 - magenta
        "#c0c0c0", // 9 - light gray
        "#808080", // 10 - gray
        "#800000", // 11 - maroon
        "#008000", // 12 - dark green
        "#000080", // 13 - navy
        "#808000", // 14 - olive
        "#800080", // 15 - purple
      ];

      // convert "53 51 51 65 ..." → [53, 51, 51, 65, ...]
      const bytes = data
        .trim()
        .split(/\s+/)
        .map((b) => parseInt(b, 10))
        .filter((b) => !isNaN(b));

      // Each byte encodes 2 pixels (4 bits each)
      let byteIndex = 0;
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x += 2) {
          const byte = bytes[byteIndex++];
          if (byte === undefined) continue;

          const high = (byte >> 4) & 0x0f;
          const low = byte & 0x0f;

          ctx.fillStyle = palette[high] || "transparent";
          ctx.fillRect(x * scale, y * scale, scale, scale);

          ctx.fillStyle = palette[low] || "transparent";
          ctx.fillRect((x + 1) * scale, y * scale, scale, scale);
        }
      }
    }, [data]);

    return data ? <canvas ref={canvasRef} /> : null;
  }

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

  function getClassInfo(raceId) {
    for (const key in classIconMap) {
      if (classIconMap[key].ids.includes(raceId)) {
        return { icon: classIconMap[key].icon, key };
      }
    }
    return { icon: DefaultIcon, key: "unknown" };
  }
  const eventMap = {
    0: "Blood Castle",
    1: "Devil Square",
    // Add other event IDs here if needed
  };

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
                            <th className="hideOnSmall">
                              {translate("highscores.leadership")}
                            </th>
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
                                        width: "40px",
                                        height: "40px",
                                        cursor: "pointer",
                                      }}
                                    />
                                  );
                                })()}
                              </td>

                              <td>
                                {player.grand_reset > 0 ? (
                                  <>
                                    (
                                    <GlowingName rank={3}>
                                      {formatNumber(player.grand_reset)}
                                    </GlowingName>
                                    ) {formatNumber(player.reset)}
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
                              <td className="hideOnSmall">
                                {formatNumber(player.leadership)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </HighscoresTable>
                    </>
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
                        </select>
                      </HighscoresFilter>

                      <HighscoresTable>
                        <thead>
                          <tr>
                            <th>{translate("highscores.rank")}</th>
                            <th>{translate("highscores.character")}</th>
                            <th>{translate("highscores.class")}</th>
                            <th>{translate("highscores.event")}</th>
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
                                <td>
                                  {eventMap[event.event_id] ||
                                    `Unknown (${event.event_id})`}
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
                              <GuildEmblem data={guild.emblem} />
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

        <Footer>
          <p>© 2025 MyraMU. All rights reserved.</p>
        </Footer>
      </HighscoresWrapper>
    </>
  );
}

export default Highscores;
