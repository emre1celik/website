import { useState, useEffect } from "react";

function GameTimer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginBottom: "5px" }}>
      Current Game Time: {currentTime.toLocaleTimeString()}{" "}
      {/* or toLocaleString() */}
    </div>
  );
}

export default GameTimer;
