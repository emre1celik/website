import { useState, useEffect } from "react";
import {
  HighscoresWrapper,
  HighscoresContent,
  HighscoresBox,
  HighscoresFilter,
  HighscoresTable,
  RankIcon,
} from "./HighscoresStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faMedal,
  faAward,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import BerserkerIcon from "../../assets/images/classes/Berserker_class_icon_White.png";
import DeadeyeIcon from "../../assets/images/classes/Deadeye_class_icon_White.png";
import DefaultIcon from "../../assets/images/classes/Hashashin_class_icon_White.png";

function Highscores({ user }) {
  const [selectedClass, setSelectedClass] = useState("all");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const classIconMap = {
    berserker: {
      ids: [1, 2, 3, 4, 5],
      icon: BerserkerIcon,
    },
    deadeye: {
      ids: [6, 7, 8, 9, 10],
      icon: DeadeyeIcon,
    },
    // add the rest of your classes here...
  };

  function getClassIcon(raceId) {
    for (const key in classIconMap) {
      if (classIconMap[key].ids.includes(raceId)) {
        return classIconMap[key].icon;
      }
    }
    return DefaultIcon; // fallback if no match
  }

  useEffect(() => {
    const fetchHighscores = async () => {
      setLoading(true);
      setError("");

      try {
        const url =
          selectedClass === "all"
            ? "https://api.myramu.online/api/highscores"
            : `https://api.myramu.online/api/highscores?class=${selectedClass}`;

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
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="all">All</option>
              </select>
            </HighscoresFilter>

            {loading ? (
              <p>
                <FontAwesomeIcon icon={faSpinner} spin /> Loading highscores...
              </p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : (
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
                        <img
                          src={getClassIcon(player.race)}
                          alt={`Class ${player.race}`}
                          style={{ width: "40px", height: "40px" }}
                        />
                      </td>

                      <td>{player.reset}</td>
                      <td>{player.level}</td>
                      <td className="hideOnSmall">{player.strength}</td>
                      <td className="hideOnSmall">{player.agility}</td>
                      <td className="hideOnSmall">{player.vitality}</td>
                      <td className="hideOnSmall">{player.energy}</td>
                      <td className="hideOnSmall">{player.leadership}</td>
                    </tr>
                  ))}
                </tbody>
              </HighscoresTable>
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
