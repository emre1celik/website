import { useEffect, useMemo, useRef, useState } from "react";

import { HighscoresTable, GlowingName } from "../highscores/HighscoresStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import GameTimer from "../../components/game_timer/GameTimer";
import { useTranslation } from "../../context/TranslationContext";

import {
  Chevron,
  DetailsCard,
  DetailsCell,
  DetailsRow,
  DetailsTitle,
  EventNameButton,
  EventsBox,
  EventsContent,
  EventsWrapper,
  InfoItem,
  InfoList,
  ScrollContent,
} from "./EventsStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDoorOpen,
  faMapMarkedAlt,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const invasionSchedule = {
  "Erohim Invasion": [
    "00:00",
    "02:00",
    "04:00",
    "06:00",
    "08:00",
    "10:00",
    "13:00",
    "15:00",
    "17:00",
    "19:00",
    "22:00",
  ],
  "Red Dragon Invasion": [
    "01:30",
    "03:30",
    "05:30",
    "07:30",
    "09:30",
    "12:30",
    "14:30",
    "16:30",
    "18:30",
    "20:30",
    "23:30",
  ],
  "Balrog Invasion": [
    "00:30",
    "02:30",
    "04:30",
    "06:30",
    "08:30",
    "10:30",
    "13:30",
    "15:30",
    "17:30",
    "19:30",
    "22:30",
  ],
  "Golden Invasion": ["07:00", "11:00"],
  "Blue Dragon Invasion": [
    "01:15",
    "03:15",
    "05:15",
    "07:15",
    "09:15",
    "12:15",
    "14:15",
    "16:15",
    "18:15",
    "20:15",
    "23:15",
  ],
};

const eventSchedule = {
  "Blood Castle": [
    "00:00",
    "02:00",
    "04:00",
    "06:00",
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
  ],
  "Devil Square": [
    "01:00",
    "03:00",
    "05:00",
    "07:00",
    "09:00",
    "11:00",
    "13:00",
    "15:00",
    "17:00",
    "19:00",
    "21:00",
    "23:00",
  ],
  "Chaos Castle": ["01:15", "15:15", "17:15", "19:15", "21:15", "23:15"],
  "Illusion Temple": ["22:30"],
  "Arka War": [{ dayOfWeek: 4, time: "22:00" }], // Thursday
  CryWolf: [
    { dayOfWeek: 0, time: "21:25" },
    { dayOfWeek: 1, time: "20:44" },
    { dayOfWeek: 2, time: "21:25" },
    { dayOfWeek: 3, time: "21:25" },
    { dayOfWeek: 4, time: "21:25" },
    { dayOfWeek: 5, time: "21:25" },
    { dayOfWeek: 6, time: "21:25" },
  ],
};

const allEvents = { ...eventSchedule, ...invasionSchedule };

const SERVER_UTC_OFFSET = -1;
function getServerNow() {
  const now = new Date();
  const utcNow = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds(),
      now.getUTCMilliseconds()
    )
  );
  utcNow.setHours(utcNow.getHours() + SERVER_UTC_OFFSET);
  return utcNow;
}

const NOW_WINDOW_MS = 5 * 60 * 1000;

function getNextEventTime(times) {
  const now = getServerNow();
  let nextEvent = null;

  for (const t of times) {
    let eventTime;

    if (typeof t === "string") {
      const [hours, minutes] = t.split(":").map(Number);
      eventTime = new Date(now);
      eventTime.setHours(hours, minutes, 0, 0);
    } else if (typeof t === "object" && t.time) {
      const [hours, minutes] = t.time.split(":").map(Number);
      eventTime = new Date(now);
      eventTime.setHours(hours, minutes, 0, 0);

      if (t.dayOfWeek != null) {
        const diff = (t.dayOfWeek + 7 - eventTime.getDay()) % 7;
        eventTime.setDate(eventTime.getDate() + diff);
      }
    }

    if (eventTime < now && now - eventTime > NOW_WINDOW_MS) {
      eventTime.setDate(eventTime.getDate() + 1);
    }

    if (!nextEvent || eventTime < nextEvent) nextEvent = eventTime;
  }

  return nextEvent;
}

function formatCountdown(nextEvent) {
  const now = getServerNow();
  const diff = nextEvent - now;

  if (diff <= 0 && diff >= -NOW_WINDOW_MS) return "Now!";
  if (diff < -NOW_WINDOW_MS) return "0h 0m 0s";

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
}

function Events({ user, currentTheme, onThemeChange }) {
  const [nextEvents, setNextEvents] = useState({});
  const [openEvent, setOpenEvent] = useState(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    const updateNextEvents = () => {
      const newNextEvents = {};
      for (const [eventName, times] of Object.entries(allEvents)) {
        newNextEvents[eventName] = getNextEventTime(times);
      }
      setNextEvents(newNextEvents);
    };

    updateNextEvents();
    const interval = setInterval(updateNextEvents, 1000);
    return () => clearInterval(interval);
  }, []);

  const { translate } = useTranslation();

  const eventInfo = useMemo(
    () => ({
      "Blood Castle": {
        enter: "Blood Castle Ticket, buy from NPC Lumen Barmaid",
        where: "Event Square (Press CTRL+T ingame)",
        rewards: "Fast reset, Ruud, Jewels",
      },
      "Devil Square": {
        enter: "Devil Square Ticket, buy from NPC Lumen Barmaid",
        where: "Event Square (Press CTRL+T ingame)",
        rewards: "Fast reset, Ruud, Jewels",
      },
      "Chaos Castle": {
        enter: "Armor of Guardsman, buy from NPC Lumen Barmaid",
        where: "Event Square (Press CTRL+T ingame)",
        rewards: "Ruud, Jewels",
      },
      "Illusion Temple": {
        enter: "Illusion Temple Ticket, buy from NPC Lumen Barmaid",
        where: "Event Square (Press CTRL+T ingame)",
        rewards: "Ruud, Jewels",
      },
      CryWolf: {
        enter: "Automatic",
        where: "Crywolf Fortress",
        rewards: "All monster health decrease -10% buff",
      },
      "Erohim Invasion": {
        enter: "Automatic invasion",
        where: "Lorencia",
        rewards: "3-5,000 Ruud, Jewels, Accesories, Ancient items",
      },
      "Balrog Invasion": {
        enter: "Automatic invasion",
        where: "Lorencia",
        rewards: "1-2,000 Ruud, Jewels, Accesories, Ancient items",
      },

      "Red Dragon Invasion": {
        enter: "Automatic invasion",
        where: "Lorencia",
        rewards: "1-2,000 Ruud, Jewels, Accesories, Ancient items",
      },
      "Golden Invasion": {
        enter: "Automatic invasion",
        where: "Lorencia",
        rewards: "1-2,000 Ruud, Jewels, Accesories, Ancient items",
      },
      "Blue Dragon Invasion": {
        enter: "Automatic invasion",
        where: "Lorencia",
        rewards: "Jewels",
      },
      "Arka War": {
        enter: "Guild registration required",
        where: "Arka War battlefield",
        rewards: "Guild rewards, Jewels, Zen",
      },
    }),
    []
  );

  const rows = Object.keys(allEvents)
    .map((eventName) => {
      const nextTime = nextEvents[eventName];
      if (!nextTime) return null;
      const diff = nextTime - getServerNow();
      return { eventName, nextTime, diff };
    })
    .filter(Boolean)
    .sort((a, b) => a.diff - b.diff);

  const toggleOpen = (eventName) => {
    userInteractedRef.current = true;
    setOpenEvent((prev) => (prev === eventName ? null : eventName));
  };

  /* auto-open first event once */

  useEffect(() => {
    if (!rows.length) return;
    if (userInteractedRef.current) return;
    setOpenEvent(rows[0].eventName);
  }, [rows]);

  return (
    <EventsWrapper>
      <Navigation user={user} />

      <EventsContent>
        <EventsBox>
          <h2>{translate("events.title")}</h2>
          <GameTimer />

          <HighscoresTable>
            <thead>
              <tr>
                <th>{translate("events.event")}</th>
                <th>{translate("events.nextStart")}</th>
                <th>{translate("events.timeRemaining")}</th>
              </tr>
            </thead>

            <tbody>
              {rows.map(({ eventName, nextTime, diff }) => {
                const isOpen = openEvent === eventName;
                const isNow = diff <= 0 && diff >= NOW_WINDOW_MS;
                const info = eventInfo[eventName];

                return (
                  <>
                    <tr key={eventName}>
                      <td>
                        <EventNameButton
                          $open={isOpen}
                          onClick={() => toggleOpen(eventName)}
                        >
                          <Chevron open={isOpen}>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Chevron>
                          {eventName}
                        </EventNameButton>
                      </td>

                      <td>
                        {nextTime.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>

                      <td>
                        {isNow ? (
                          <GlowingName rank={1}>
                            {translate("events.now")}
                          </GlowingName>
                        ) : (
                          formatCountdown(nextTime)
                        )}
                      </td>
                    </tr>

                    {isOpen && info && (
                      <DetailsRow>
                        <DetailsCell colSpan={3}>
                          <DetailsCard>
                            <DetailsTitle>{eventName}</DetailsTitle>

                            <InfoList>
                              <InfoItem>
                                <FontAwesomeIcon icon={faDoorOpen} />
                                <div>
                                  <b>Enter:</b> {info.enter}
                                </div>
                              </InfoItem>

                              <InfoItem>
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                <div>
                                  <b>Where:</b> {info.where}
                                </div>
                              </InfoItem>

                              <InfoItem>
                                <FontAwesomeIcon icon={faTrophy} />
                                <div>
                                  <b>Rewards:</b> {info.rewards}
                                </div>
                              </InfoItem>
                            </InfoList>
                          </DetailsCard>
                        </DetailsCell>
                      </DetailsRow>
                    )}
                  </>
                );
              })}
            </tbody>
          </HighscoresTable>
        </EventsBox>
      </EventsContent>

      <Footer currentTheme={currentTheme} onThemeChange={onThemeChange} />
    </EventsWrapper>
  );
}

export default Events;
