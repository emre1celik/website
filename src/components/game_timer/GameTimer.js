import { useState, useEffect } from "react";
import { useTranslation } from "../../context/TranslationContext";

function GameTimer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { translate } = useTranslation();

  return (
    <div style={{ marginBottom: "5px" }}>
      {translate("events.currentGameTime")}: {currentTime.toLocaleTimeString()}{" "}
      {/* or toLocaleString() */}
    </div>
  );
}

export default GameTimer;
