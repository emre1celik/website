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

function Info({ user }) {
  // 🔹 Array of guide sections (each with title, icon, and full content)
  const sections = [
    {
      title: "Server Information & Settings",
      icon: faCog,
      content: (
        <>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FontAwesomeIcon
                icon={faBolt}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>EXP Rate:</strong> 5000x
            </li>
            <li>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Master EXP:</strong> 9999x
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCrown}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Majestic EXP:</strong> 9999x
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGem}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Excellent Item Drop Rate:</strong> 200%
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGift}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Reset Reward:</strong> 5 WCoins, 100 Goblin Points, 1,000
              Ruud
            </li>
            <li>
              <FontAwesomeIcon
                icon={faRedo}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Grand Reset:</strong> After 100 resets
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Grand Reset Reward:</strong> 1,000 WCoins, 50,000 Goblin
              Points
            </li>
            <li>
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Event Timers:</strong> Check website schedule
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDragon}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Boss Respawns:</strong> Each hour
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTerminal}
                style={{ color: "#4caf50", marginRight: "8px" }}
              />
              <strong>Commands:</strong>
            </li>
            <br />
            <li>/addstr (amount)</li>
            <li>/addagi (amount)</li>
            <li>/addene (amount)</li>
            <li>/addvit (amount)</li>
            <li>/addcmd (amount)</li>
            <li>/reset</li>
            <li>/offstore</li>
            <li>/offattack</li>
            <li>/clearinventory</li>
          </ul>
        </>
      ),
    },
    {
      title: "Weapons & Gear",
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
              Hunt monsters to drop <strong>Excellent Items</strong> with great
              options (minimum 3-4 options).
            </li>
            <br />
            <li>
              OR check the <strong>X-Shop</strong> for Lucky and Premium sets
              (press X in-game to open).
            </li>
            <br />
            <li>
              OR begin your <strong>Bloodangel Set</strong> journey — available
              from the <em>Elbeland NPC</em> Priest James, then upgrade it
              through tiers to evolve into higher sets like Darkangel,
              Holyangel, and beyond. This is the best armor; excellent and
              ancient options.
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
          <ul style={{ listStyleType: "none" }}>
            <li>
              <strong>2nd Class Change (NPC Sebina, Devias)</strong>: At level
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
              <strong>3rd Class Change (NPC Apostle Devin, CryWolf)</strong>:
              Must be level 400 and have completed Marlon quest. Quest has three
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
            <strong>Excellent Endgame Equipment</strong>. The best ways to farm
            Ruud include:
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <strong>Blood Castle</strong> and <strong>Devil Square</strong> —
              top Ruud reward events
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <strong>Golden Invasions</strong> — hunt Golden Dragons and Titans
              for bonus Ruud
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faDragon} style={{ marginRight: "6px" }} />
              <strong>Majestic Maps</strong> — defeat Elite Monsters for endgame
              Ruud farming
            </li>
            <br />
            <li>
              <FontAwesomeIcon
                icon={faHandsHelping}
                style={{ marginRight: "6px" }}
              />
              Use your Ruud at the <strong>Ruud NPC</strong> to buy powerful
              ancient weapons and armors
            </li>
          </ul>
          <p className="footer-note">
            <FontAwesomeIcon icon={faStar} style={{ marginRight: "6px" }} />
            <em>Tip:</em> Always keep an eye on <strong>Event Timers</strong>{" "}
            for the best Ruud opportunities! The stronger the challenge — the
            greater the reward.
          </p>
        </>
      ),
    },
    {
      title: "Chaos Combination Rates",
      icon: faGlassWhiskey,
      content: (
        <>
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
              <strong>Wings Creation:</strong> 60% base success
            </li>
            <br />
            <li>
              <strong>2nd Wings:</strong> 80% base success
            </li>
            <br />
            <li>
              <strong>3rd Wings:</strong> 60% base success
            </li>
            <br />
            <li>
              <strong>4th & 5th Wings:</strong> 30% base success
            </li>
          </ul>
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
            <h2 style={{ textAlign: "center" }}>Guides</h2>
            <p>
              Here you’ll find everything you need to know — from server details
              and gear progression to Chaos Machine crafting and Ruud farming
              tips. Whether you’re a new adventurer or a returning veteran, this
              page will help you power up efficiently and enjoy every part of
              your journey on our server!
            </p>

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
