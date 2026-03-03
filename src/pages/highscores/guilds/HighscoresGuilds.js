import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BossTableWrapper, GlowingName, HighscoresTable, PlayerCard, PlayerGrid, RankIcon } from "../HighscoresStyles";
import { faCrown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../../../context/TranslationContext";
import GuildEmblem from "../../../components/guild_emblem/GuildEmblem";

function HighscoresGuilds({ activeTab, loadingGuilds, errorGuilds, guilds, formatNumber }) {
    const { translate } = useTranslation();

    return (
        activeTab === "guilds" && (
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
                        <PlayerCard style={{ height: "550px", width: "100%" }}>
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
        )
    )
}

export default HighscoresGuilds;