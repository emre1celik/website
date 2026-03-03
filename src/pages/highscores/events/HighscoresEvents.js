import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "../../../context/TranslationContext";
import { faCrown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { BossCard, BossGrid, BossHeader, BossSubtitle, BossTableWrapper, BossText, BossTitle, ClassIconBackground, GlowingName, HighscoresTable, RankIcon } from "../HighscoresStyles";

function HighscoresEvents({
    activeTab,
    loadingEvents,
    errorEvents,
    eventMeta,
    eventsByType,
    setSelectedPlayer,
    formatNumber
}) {
    const { translate } = useTranslation();
    return (activeTab === "events" && (
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
    ))
}

export default HighscoresEvents;