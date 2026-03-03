import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BossTableWrapper, ClassIconBackground, GlowingName, HighscoreClassIconImage, HighscoresTable, PlayerCard, PlayerGrid, PlayerHeader, PlayerTitle, RankIcon } from "../HighscoresStyles";
import { useTranslation } from "../../../context/TranslationContext";
import { faCrown, faSpinner } from "@fortawesome/free-solid-svg-icons";

import DefaultIcon from "../../../assets/images/classes/default.png";
function HighscoresPlayers({ activeTab, loading, error, players, classMeta, classIconMap, shuffledClassKeys, classNamesMap, getClassInfo, setSelectedPlayer }) {
    const { translate } = useTranslation();
    return (activeTab === "players" && (
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
                                        <th>{translate("highscores.class")}</th>
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
                                            <td
                                            >
                                                {(() => {
                                                    const { icon, key } = getClassInfo(p.race);

                                                    return (<HighscoreClassIconImage
                                                        src={icon}
                                                        alt={key} />
                                                    );
                                                })()}
                                            </td>
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
                                                    <th>{translate("highscores.class")}</th>
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
                                                        <td
                                                        >
                                                            {(() => {
                                                                const { icon, key } = getClassInfo(p.race);

                                                                return (<HighscoreClassIconImage
                                                                    src={icon}
                                                                    alt={classNamesMap[key] || "Unknown"}
                                                                    title={classNamesMap[key] || "Unknown"} />
                                                                );
                                                            })()}
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
    ))
}

export default HighscoresPlayers;