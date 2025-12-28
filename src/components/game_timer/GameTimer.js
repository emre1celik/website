import { useState, useEffect } from "react";
import { useTranslation } from "../../context/TranslationContext";

function GameTimer() {
  const { translate } = useTranslation();
  const SERVER_UTC_OFFSET = -1; // change this dynamically as needed
  const [serverTime, setServerTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcNow = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          now.getUTCHours(),
          now.getUTCMinutes(),
          now.getUTCSeconds()
        )
      );

      // Apply server offset dynamically
      utcNow.setHours(utcNow.getHours() + SERVER_UTC_OFFSET);

      // Format as HH:mm:ss
      const formattedTime = utcNow.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setServerTime(
        `${formattedTime} (UTC${
          SERVER_UTC_OFFSET >= 0 ? "+" + SERVER_UTC_OFFSET : SERVER_UTC_OFFSET
        })`
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [SERVER_UTC_OFFSET]); // rerun effect if offset changes

  return (
    <div style={{ marginBottom: "5px", textAlign: "center" }}>
      {translate("events.currentGameTime")}: {serverTime}
    </div>
  );
}

export default GameTimer;
