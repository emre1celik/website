import { useState, useEffect } from "react";
import {
  HighscoresWrapper,
  HighscoresContent,
  HighscoresBox,
  HighscoresFilter,
  HighscoresTable,
  RankIcon,
  BottomFade,
} from "./HighscoresStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faSpinner } from "@fortawesome/free-solid-svg-icons";
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

function Highscores({ user }) {
  const [selectedClass, setSelectedClass] = useState("all");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  function formatNumber(num) {
    return num?.toLocaleString("en-US");
  }

  useEffect(() => {
    const fetchHighscores = async () => {
      setLoading(true);
      setError("");

      try {
        let url = "https://api.myramu.online/api/highscores";

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
          setError(data.error || "Failed to fetch highscores");
        }
      } catch (err) {
        setError("Server error: " + err.message);
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
            <h2>Highscores</h2>

            <HighscoresFilter>
              <label>Filter by Class:</label>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img
                  src={
                    selectedClass === "all"
                      ? DefaultIcon
                      : classIconMap[selectedClass].icon
                  }
                  alt={selectedClass}
                  style={{ width: "28px", height: "28px" }}
                />
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="all">All</option>
                  {Object.keys(classIconMap).map((key) => (
                    <option key={key} value={key}>
                      {classNamesMap[key] || key}
                    </option>
                  ))}
                </select>
              </div>
            </HighscoresFilter>

            {loading ? (
              <p>
                <FontAwesomeIcon icon={faSpinner} spin /> Loading highscores...
              </p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : (
              <>
                <HighscoresTable>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Resets</th>
                      <th>Level</th>
                      <th className="hideOnSmall">Strength</th>
                      <th className="hideOnSmall">Agility</th>
                      <th className="hideOnSmall">Vitality</th>
                      <th className="hideOnSmall">Energy</th>
                      <th className="hideOnSmall">Leadership</th>
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

                        <td>{player.name}</td>
                        <td>
                          {(() => {
                            const { icon, key } = getClassInfo(player.race);
                            return (
                              <img
                                src={icon}
                                alt={`Class ${player.race}`}
                                title={classNamesMap[key] || "Unknown Class"}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  cursor: "pointer",
                                }}
                              />
                            );
                          })()}
                        </td>

                        <td>{formatNumber(player.reset)}</td>
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
                <BottomFade />
              </>
            )}
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
