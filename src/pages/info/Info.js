import { useState } from "react";
import { Helmet } from "react-helmet";
import { InfoBox, InfoHero, InfoWrapper } from "./InfoStyles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCog,
  faScroll,
  faShieldAlt,
  faCoins,
  faHandsHelping,
  faDragon,
  faStar,
  faGlassWhiskey,
  faBolt,
  faCrown,
  faGem,
  faGift,
  faTrophy,
  faClock,
  faTerminal,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../../context/TranslationContext";

function Info({ user }) {
  const { translate } = useTranslation();

  const sections = [
    {
      title: translate("guide.serverInfo.title"),
      icon: faCog,
      content: (
        <>
          <p>{translate("guide.serverInfo.intro")}</p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FontAwesomeIcon
                icon={faBolt}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.expRate")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.masterExp")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCrown}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.majesticExp")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGem}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.excellentDrop")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGift}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.resetReward")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faRedo}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.grandReset")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.grandResetReward")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.eventTimers")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDragon}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.bossRespawns")}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTerminal}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              {translate("guide.serverInfo.list.commands")}
            </li>
            <br />
            <li>/addstr {translate("guide.serverInfo.list.amount")}</li>
            <li>/addagi {translate("guide.serverInfo.list.amount")}</li>
            <li>/addene {translate("guide.serverInfo.list.amount")}</li>
            <li>/addvit {translate("guide.serverInfo.list.amount")}</li>
            <li>/addcmd {translate("guide.serverInfo.list.amount")}</li>
            <li>/reset</li>
            <li>/offstore</li>
            <li>/offattack</li>
            <li>/clearinventory</li>
          </ul>
          <p>{translate("guide.serverInfo.outro")}</p>
        </>
      ),
    },
    {
      title: translate("guide.gear.title"),
      icon: faShieldAlt,
      content: (
        <>
          <p>
            Start your adventure by visiting the <strong>NPC Shops</strong> in{" "}
            <em>Lorenica</em>, <em>Noria</em>, or <em>Elbeland</em> for basic
            starter gear (press TAB to open minimap). After this you can:
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              Hunt monsters and bosses to drop{" "}
              <strong>Excellent option items</strong>
              (minimum 3-4 options). You can also hunt Kundun boss in Kalima for{" "}
              <strong>Excellent and Ancient option items</strong>
            </li>
            <br />
            <li>
              OR collect <strong>Seed Capsules</strong> for 5 slot socket
              weapons and armor. The capsules also drop seeds that you can
              insert into the slots.
            </li>
            <br />
            <li>
              OR begin your <strong>Bloodangel Set</strong> journey — available
              from the <em>Elbeland NPC</em> Priest James. You need Ruud for
              this, which can be collected from all events. Upgrade it through
              tiers to evolve into higher sets. This is the best armor; this
              armor has excellent and ancient options. The full upgrade path is:
              <br />
              <br />
              <ul>
                <li>Bloodangel</li>
                <li>Darkangel</li>
                <li>Holyangel</li>
                <li>Awakening</li>
                <li>Soul</li>
                <li>Blue Eye</li>
                <li>Silver Heart</li>
                <li>Manticore</li>
                <li>Brilliant</li>
                <li>Apocalypse</li>
                <li>Lightning</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Quests & Evolution",
      icon: faScroll,
      content: (
        <>
          <p>
            Quests and class advancements are the core progression system in MU.
            Completing these quests unlocks higher classes, new skills, stat
            points, and powerful equipment. Follow the NPC guidance carefully,
            defeat the required monsters, and complete each stage to evolve your
            character to the next class.
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>2nd class change (NPC Sebina, Devias)</strong>: At level
              150, talk to NPC Sebina in Devias. Then bring class-specific items
              (can be bought from NPC Lumen barmaid in Lorencia):
              <br />
              <br />
              <ul style={{ listStyleType: "none" }}>
                <li>Dark Knight / Slayer: Broken Sword</li>
                <br />
                <li>Dark Wizard / Rune Mage: Soul Shard</li>
                <br />
                <li>Elf: Tear of Elf</li>
              </ul>
              <br />
            </li>
            <br />
            <hr style={{ borderColor: "#4caf50" }} />
            <br />
            <li>
              <strong>3rd class change (NPC Apostle Devin, CryWolf)</strong>:
              Must be level 400 and have completed 2nd quest. Quest has three
              parts (items can be bought from NPC Lumen barmaid in Lorencia):
              <br />
              <br />
              <ol style={{ listStyleType: "none" }}>
                <li>
                  Bring 5,000,000 Zen and items: Flame of Death Beam Knight
                  (Tarkan), Horn of Hell Maine (Aida), Feather of Phoenix
                  (Icarus)
                </li>
                <br />
                <li>
                  Level 400, pay 7,000,000 Zen, enter Balgass Barracks map via
                  Werewolf Guardsman in Crywolf, kill 20 each of Balram, Death
                  Spirit, Soram.
                </li>
                <br />
                <li>
                  Enter Refuge (via Gatekeeper inside Barracks), kill 1 Dark Elf
                  Hero. Reward: third class change, additional stat points,
                  unlock Master skill tree.
                </li>
              </ol>
            </li>
            <br />
            <hr style={{ borderColor: "#4caf50" }} />
            <br />
            <li>
              <strong>4th class change (NPC Cent, Lorencia [131, 147])</strong>:
              Must be level 800 and have completed 3rd quest. Quest has three
              stages:
              <br />
              <br />
              <ol style={{ listStyleType: "none" }}>
                <li>
                  Stage 1: Eligibility Test – Defeat Cent to pass the first
                  test. Reward: +20 stat points.
                </li>
                <br />
                <li>
                  Stage 2: New Battle (1) – Defeat 5 Deep Dungeon Skeleton
                  Warriors, 5 Cyclops, and 5 Ghost Monsters within 1 minute.
                  Reward: +30 stat points.
                </li>
                <br />
                <li>
                  Stage 3: New Battle (2) – Defeat Cent again with stronger
                  skills. Reward: +50 stat points, Scroll of Gray Oblivion,
                  unlock 4th class, skill enhance tree.
                </li>
              </ol>
              <br />
              <strong>Rewards:</strong> +100 total stat points, 4th class
              unlocked, skill enhance tree, Scroll of Gray Oblivion.
            </li>
            <br />
            <hr style={{ borderColor: "#4caf50" }} />
            <br />
            <li>
              <strong>5th class change (NPC Eunice, Devias [193, 12])</strong>:
              Must be level 1,200 and have completed the 4th quest. Quest has
              four parts:
              <br />
              <br />
              <ol style={{ listStyleType: "none" }}>
                <li>
                  Wave 1: Receive <em>Extra Nuke DMG</em> buff and defeat Eunice
                  within 1 minute.
                </li>
                <br />
                <li>
                  Wave 2: Receive <em>Extra Bolt DMG</em> buff and defeat Eunice
                  within 1 minute.
                </li>
                <br />
                <li>
                  Wave 3: Receive <em>Extra Wide DMG</em> buff and defeat Eunice
                  within 1 minute.
                </li>
                <br />
                <li>
                  Wave 4 (Mount Quest): Give Eunice 300{" "}
                  <em>Jewel of Creation</em>, then defeat her on her Giant Mount
                  within 1 minute to earn a random
                  <strong> Giant Mount</strong>.
                </li>
              </ol>
              <br />
              Rewards: +200 stat points, unlock 5th skill tree, 3 Extra Ability
              Cards (Nuke/Bolt/Wide), and access to Giant Mounts.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How to Get Ruud",
      icon: faCoins,
      content: (
        <>
          <p>
            Ruud is a valuable currency used to purchase{" "}
            <strong>Ancient</strong> and{" "}
            <strong>Excellent Endgame Equipment</strong>. It can also be used
            for upgrading certain items, enhancing mounts, and exchanging for
            rare crafting materials. The best ways to farm Ruud include:
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <strong>Blood Castle</strong> and <strong>Devil Square</strong> —
              top Ruud reward events; repeat runs daily for maximum profit.
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <strong>Golden Invasions</strong> — hunt Golden Dragons, Titans,
              and other mini-bosses for bonus Ruud and rare loot.
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <strong>Majestic Maps</strong> — defeat Elite Monsters and World
              Bosses in high-level maps for endgame Ruud farming.
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <strong>Castle Siege</strong> — join your guild in special raids
              for shared Ruud rewards and bonus loot.
            </li>
            <br />
            <li>
              <FontAwesomeIcon
                icon={faHandsHelping}
                style={{ marginRight: "6px" }}
              />
              Use your Ruud at the <strong>Ruud NPC</strong> to buy powerful
              ancient weapons, armors, and upgrade materials.
            </li>
          </ul>
          <p className="footer-note">
            <FontAwesomeIcon icon={faStar} style={{ marginRight: "6px" }} />
            <em>Tip:</em> Always check <strong>Event Timers</strong> for the
            best Ruud opportunities! Focus on high-level challenges — the
            stronger the monsters, the greater the Ruud rewards. Also, saving
            Ruud for <strong>limited-time items</strong> can maximize your
            endgame power.
          </p>
        </>
      ),
    },
    {
      title: "Chaos Combination Rates",
      icon: faGlassWhiskey,
      content: (
        <>
          <p>
            <strong>Chaos Combination</strong> is the system used to craft and
            upgrade high-tier items, including wings and powerful weapons. You
            can perform Chaos Combinations at special NPCs like the{" "}
            <strong>Noria Goblin</strong>, located in Noria, or similar NPCs in
            Lorencia and Devias. Using the correct materials and understanding
            success rates is crucial to maximize your chances.
          </p>

          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>Item Upgrade Success Rates:</strong>
              <ul style={{ listStyleType: "none" }}>
                <li>+1 ~ +6 → 100%</li>
                <li>+7 → 100%</li>
                <li>+8 → 100%</li>
                <li>+9 → 100%</li>
                <li>+10 → 100%</li>
                <li>+11 → 100%</li>
                <li>+12 → 100%</li>
                <li>+13 → 100%</li>
                <li>+14 → 100%</li>
                <li>+15 → 100%</li>
              </ul>
            </li>
            <br />
            <li>
              <strong>Wings Creation:</strong> 60% base success. Tips: Use
              successful Chaos combination items to increase chance, and try in
              high-level maps for better outcomes.
            </li>
            <br />
            <li>
              <strong>2nd Wings:</strong> 80% base success. Recommended to use
              additional enhancement stones for higher reliability.
            </li>
            <br />
            <li>
              <strong>3rd Wings:</strong> 60% base success. Be cautious, as
              failure can consume some materials.
            </li>
            <br />
            <li>
              <strong>4th & 5th Wings:</strong> 30% base success. High-risk,
              high-reward — prepare multiple sets of items and consider
              combining with luck-enhancing buffs.
            </li>
            <br />
            <li>
              <strong>Tips for Chaos Combination:</strong> Always check your
              material ratios, use higher-tier ingredients when possible, and
              consider completing daily quests or events that provide bonus
              success buffs. High-tier wings and weapons crafted via Chaos
              Combination are essential for endgame progression.
            </li>
          </ul>

          <p>
            Successfully using Chaos Combination not only upgrades your
            equipment but also provides a strategic advantage in high-level maps
            and PvP battles. Remember to gather sufficient materials and plan
            your combinations carefully — failing a high-tier combination can be
            costly, so preparation is key!
          </p>
        </>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => setCurrentIndex((i) => (i + 1) % sections.length);
  const handlePrev = () =>
    setCurrentIndex((i) => (i === 0 ? sections.length - 1 : i - 1));

  const current = sections[currentIndex];

  return (
    <>
      <Helmet>
        <title>
          Myra MuOnline - Guides | Season 19 Episode 2-3 | MU Online Client
        </title>
      </Helmet>
      <InfoWrapper>
        <Navigation user={user} />
        <InfoHero>
          <InfoBox>
            <h2 style={{ textAlign: "center" }}>
              {translate("navigation.info")}
            </h2>
            <p>{translate("guide.intro")}</p>

            {/* Arrow Navigation and Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // ← spreads arrows to far ends
                width: "100%",
              }}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={handlePrev}
                style={{
                  cursor: "pointer",
                  color: "#4caf50",
                  fontSize: "1.5rem",
                }}
              />
              <h3 style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={current.icon}
                  style={{ marginRight: "8px", color: "#4caf50" }}
                />
                {current.title}
              </h3>
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={handleNext}
                style={{
                  cursor: "pointer",
                  color: "#4caf50",
                  fontSize: "1.5rem",
                }}
              />
            </div>

            <hr style={{ width: "100%", borderColor: "#4caf50" }} />

            <div
              style={{ marginTop: "1rem", transition: "all 0.3s ease-in-out" }}
            >
              {current.content}
            </div>
          </InfoBox>
        </InfoHero>
        <Footer />
      </InfoWrapper>
    </>
  );
}

export default Info;
