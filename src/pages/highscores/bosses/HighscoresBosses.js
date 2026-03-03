import { faCrown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BossCard, BossGrid, BossHeader, BossSubtitle, BossTableWrapper, BossText, BossTitle, ClassIconBackground, GlowingName, HighscoreClassIconImage, HighscoresTable, RankIcon } from "../HighscoresStyles";

function HighscoresBosses({ activeTab, loading, bossDisplayOrder, classNamesMap, bosses, bossConfigMap, getClassInfo, bossData }) {
    return (activeTab === "bosses" && (
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
                                <BossCard key={boss} style={{ height: "400px" }}>

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
                                                    <th>Class</th>
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
                                                        <td className="iconCell">
                                                            {(() => {
                                                                const { icon, key } = getClassInfo(row.race);
                                                                return (
                                                                    <HighscoreClassIconImage
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

                                </BossCard>
                            );
                        })}
                </BossGrid>
            )}
        </>
    ))
}

export default HighscoresBosses;