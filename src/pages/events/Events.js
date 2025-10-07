import { useState, useEffect } from "react";
import { HighscoresTable, GlowingName } from "../highscores/HighscoresStyles";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { EventsBox, EventsContent, EventsWrapper } from "./EventsStyles";
import GameTimer from "../../components/game_timer/GameTimer";
import { useTranslation } from "../../context/TranslationContext";
const invasionSchedule = {
  "White Wizard": [
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
  "Red Dragon": [
    "01:30",
    "05:30",
    "09:30",
    "13:30",
    "15:30",
    "17:30",
    "19:30",
    "21:30",
    "23:30",
    "03:30",
    "07:30",
    "11:30",
  ],
  "Golden Invasion": [
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
  ],
  "Muun Invasion": [
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
};

// Define events schedule
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
  "All Bosses": [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ],
  "Chaos Castle": ["01:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  Doppelganger: ["10:30", "23:30"],
  "Arka War": [{ dayOfWeek: 4, time: "22:00" }], // Thursday
  "Castle Deep": [{ time: "13:00" }, { time: "23:00" }],
  CryWolf: [
    { dayOfWeek: 0, time: "21:25" },
    { dayOfWeek: 1, time: "20:44" },
    { dayOfWeek: 2, time: "21:25" },
    { dayOfWeek: 3, time: "21:25" },
    { dayOfWeek: 4, time: "21:25" },
    { dayOfWeek: 5, time: "21:25" },
    { dayOfWeek: 6, time: "21:25" },
  ],
  "Illusion Temple": ["22:30"],
};

const allEvents = { ...eventSchedule, ...invasionSchedule };

const NOW_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
function getNextEventTime(times) {
  const now = new Date();
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

    // Only move to next day if more than NOW_WINDOW_MS passed
    if (eventTime < now && now - eventTime > NOW_WINDOW_MS) {
      eventTime.setDate(eventTime.getDate() + 1);
    }

    if (!nextEvent || eventTime < nextEvent) nextEvent = eventTime;
  }

  return nextEvent;
}

// Countdown logic
function formatCountdown(nextEvent) {
  const now = new Date();
  const diff = nextEvent - now;

  if (diff <= NOW_WINDOW_MS && diff >= -NOW_WINDOW_MS) return "Now!"; // 5-min window
  if (diff < -NOW_WINDOW_MS) return "0h 0m 0s";

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
}

function Events({ user }) {
  const [nextEvents, setNextEvents] = useState({});

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
              {Object.keys(allEvents)
                .map((eventName) => {
                  const nextTime = nextEvents[eventName];
                  if (!nextTime) return null;
                  const diff = nextTime - new Date();
                  return { eventName, nextTime, diff };
                })
                .filter(Boolean)
                .sort((a, b) => a.diff - b.diff) // sort by time remaining
                .map(({ eventName, nextTime, diff }) => {
                  const isNow = diff <= NOW_WINDOW_MS && diff >= -NOW_WINDOW_MS;

                  return (
                    <tr key={eventName}>
                      <td>{eventName}</td>
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
                  );
                })}
            </tbody>
          </HighscoresTable>
        </EventsBox>
      </EventsContent>
      <Footer>
        <p>© 2025 MyraMU. All rights reserved.</p>
      </Footer>
    </EventsWrapper>
  );
}

export default Events;
